import { useForm } from "react-hook-form";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm<IFormData>();

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      제목 : <input type="text" {...register("title")} />
      내용 : <input type="text" {...register("contents")} />
      <button>등록하기</button>
    </form>
  );
}

/*  inpur의 내용 지울수 있음 */
/* <button type="submit">보내기</button> -> default값이다. */
/* <button type="reset">지우기</button> */
/* <button type="button"> 나만의 버튼 </button> */
