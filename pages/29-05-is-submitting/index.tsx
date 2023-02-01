import axios from "axios";
import { useState } from "react";

export default function IsSubmittingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [myData, setMyData] = useState<any>();

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    // setState의 경우 최종 한번만 반영이 되지만,
    // await의 경우 흐름을 한번 끊고 마이크로큐로 들어가기 때문에
    // 흐름이 끊길때 true반영 하고, false반영하고 비동기처리로?
    const result = await axios.get("https://koreanjson.com/posts/1");
    setMyData(result);
    setIsSubmitting(false);
  };

  return (
    <button onClick={onClickSubmit} disabled={isSubmitting}>
      등록하기등의API요청
    </button>
  );
}
