import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";
import Modal from "antd/es/modal/Modal";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";
import { useRouter } from "next/router";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, passworkd: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER_EXAMPLE);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      // 1. login후 accessToken받아오기.
      const result = await loginUserExample({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;

      // 2. recoil에 token저장하기.(globalState)
      if (!accessToken) {
        Modal.error({ content: "retrry please." });
        return;
      }
      setAccessToken(accessToken);

      // 3. login 성공 페이지로 이동.
      router.push("/22-02-login-success");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.meesage });
    }
  };

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
