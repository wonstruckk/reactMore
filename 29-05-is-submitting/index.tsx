import axios from "axios";
import { useState } from "react";

export default function IsSubmittingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [myData, setMyData] = useState<any>();

  const onClickSubmit = async () => {
    setIsSubmitting(true);
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
