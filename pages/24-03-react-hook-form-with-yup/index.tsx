import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormData {
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

  // email: yup.string().email("형식아님니다.").required("이메일필수입력임."),
  // password: yup
  //   .string()
  //   .min(4, "비밀번호최소4자리이상")
  //   .max(15, "15자미만")
  //   .required("필수입력임니다비밀번호"),
  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 맞지 않아요.")
  //   .required("핸드폰필수입력임"),
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
      작성자 : <input type="text" {...register("writer")} />
      {/* writer타입이 가능한 이유는 폼에 타입을 지정했으니까 되는거임 */}
      <div>{formState.errors.writer?.message}</div>
      제목 : <input type="text" {...register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용 : <input type="text" {...register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      내용 : <input type="text" {...register("password")} />
      <div>{formState.errors.password?.message}</div>
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        등록하기
      </button>
    </form>
  );
}

/*  inpur의 내용 지울수 있음 */
/* <button type="submit">보내기</button> -> default값이다. */
/* <button type="reset">지우기</button> */
/* <button type="button"> 나만의 버튼 </button> */
