import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [title, setTitle] = useState("");

  //비동기
  const onClickAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };

  //동기
  // async function onClickSync() {
  //   const result = await axios.get("https://koreanjson.com/posts/1");
  //   console.log(result);
  //   setTitle(result.data.title);
  // }

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    setTitle(result.data.title);
  };

  return (
    <>
      <button onClick={onClickAsync}>Rest-API 요청하기 비동기통신</button>
      <button onClick={onClickSync}>Rest-API 요청하기 동기통신</button>
      <div>{title}</div>
    </>
  );
}
