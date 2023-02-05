import { SettingFilled } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { resultKeyNameFromField } from "@apollo/client/utilities";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage() {
  // db에 큰 사진하나하나 업로드 할 수가 없다.
  // 미리보기다. preview
  const [imageUrl, setImageUrl] = useState("");
  const [file,setFile] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [myFunction] = useMutation(CREATE_BOARD);

  const graphQlHandler = async () => {
    // storage에 upload이후 다운로드주소를 db에 보내주는것이 효율적이고 그렇게 해야한다.
    const resultFile = await uploadFile({variables;{ file }})
    const url = resultFile.data?.uploadFile.url

    const result = await myFunction({
      variables: {
        createBoardInput: {
          writer,
          password: "1234",
          title,
          contents,
          images: [url],
        },
      },
    });
    console.log(result.data.createBoard.message);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // multiple 속성으로 여러개 드래그 가능.
    console.log(file);
    if (!file) return;
    // try {
    //   const result = await uploadFile({
    //     variables: {
    //       file,
    //     },
    //   });

    //   console.log(result.data?.uploadFile.url);
    //   setImageUrl(result.data?.uploadFile.url ?? "");
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error.message });
    // }

    // 1. 임시 url 생성(가짜 url) : 내 브라우저에서만 접근 가능.
    // const result = URL.createObjectURL(file);
    // console.log(result);
    // setImageUrl(result);

    // 2. 임시 url 생성(진짜 url) : 다른 브라우저에서도 접근 가능.
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target?.result);
        setFile(file)
      }
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />;
      <img src={imageUrl} />
      <button onClick={graphQlHandler}> 게시글 등록하기 </button>
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} alt="" /> */}
    </>
  );
}
