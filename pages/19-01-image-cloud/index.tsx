import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent } from "react";
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

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  // 앞이 결과 타입인데 너무 많으니까 pick으로 쓰는것만 가지고온다 IMutation에서., 뒤가 variable타입.
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // multiple 속성으로 여러개 드래그 가능.
    console.log(file);

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

  return (
    <>
      <input type="file" onChange={onChangeFile} />;
      <img src={`https://storage.googleapis.com/${imageUrl}`} alt="" />
    </>
  );
}
