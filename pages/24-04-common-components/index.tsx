import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons";

export interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
}

const schema = yup.object({
  writer: yup.string().required("작성자입력하세요."),
  title: yup.string().required("제목을입력해주세요"),
  contents: yup.string().required("내용입력해주세요"),
  password: yup.string().required("비밀번호입력해주세요"),
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <Input01 type="text" register={register("writer")} />
      {/* writer타입이 가능한 이유는 폼에 타입을 지정했으니까 되는거임 */}
      <div>{formState.errors.writer?.message}</div>
      제목 :<Input01 type="text" register={register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용 : <Input01 type="text" register={register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      비밀번호 :<Input01 type="password" register={register("password")} />
      <div>{formState.errors.password?.message}</div>
      <Button01 title="등록하기" isActive={formState.isValid} />
    </form>
  );
}

/*  inpur의 내용 지울수 있음 */
/* <button type="submit">보내기</button> -> default값이다. */
/* <button type="reset">지우기</button> */
/* <button type="button"> 나만의 버튼 </button> */
