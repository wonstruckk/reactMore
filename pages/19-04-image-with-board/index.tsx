import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  // 앞이 결과 타입인데 너무 많으니까 pick으로 쓰는것만 가지고온다 IMutation에서., 뒤가 variable타입.
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [myFunction] = useMutation(CREATE_BOARD);

  const writerHandler = (event) => {
    setWriter(event.target.value);
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentsHandler = (event) => {
    setContents(event.target.value);
  };

  const graphQlHandler = async () => {
    // 스코프 체인이 일어나서 writer state를 활용이 가능해 진다.
    const result = await myFunction({
      variables: {
        createBoardInput: {
          writer,
          password: "1234",
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result.data.createBoard.message);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // input type의 multiple 속성으로 여러개 드래그 가능.
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });

      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      작성자 : <input type="text" onChange={writerHandler} />
      <br />
      제목 : <input type="text" onChange={titleHandler} />
      <br />
      내용 : <input type="text" onChange={contentsHandler} />
      <br />
      <div
        onClick={onClickImage}
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
      >
        이미지선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} alt="" />
      <button onClick={graphQlHandler}>GraphQl API 요청 해보기.(동기)</button>
    </>
  );
}
