import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
  // 받아오는 type=password는 props라는거 명심하자, 타입받아오는거아니다.
  return <input type={props.type} {...props.register} />;
}
