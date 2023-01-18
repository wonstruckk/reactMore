import { useState } from "react";

export default function BoardNewPage() {
  const [isSection1, setIsSection1] = useState(true);
  const [isSection2, setIsSection2] = useState(false);
  const [isSection3, setIsSection3] = useState(false);

  const onClickSecion1 = () => {
    setIsSection1((prev) => !prev);
    setIsSection2(false);
    setIsSection3(false);
  };

  const onClickSecion2 = () => {
    setIsSection1(false);
    setIsSection2(true);
    setIsSection3(false);
  };

  const onClickSecion3 = () => {
    setIsSection1(false);
    setIsSection2(false);
    setIsSection3(true);
  };

  return (
    <>
      {/* <h1>등록페이지</h1>
      제목 :<input type="text" />
      <br />
      내용 :<input type="text" />
      <br />
      <button>등록하기</button> */}
      <button className="tabs" onClick={onClickSecion1} disabled={isSection1}>
        section title1
      </button>
      {isSection1 ? <div>섹션1</div> : <></>}
      <button
        active={isSection2}
        onClick={onClickSecion2}
        disabled={isSection2}
      >
        section title2
      </button>
      {isSection2 ? <div>섹션2</div> : <></>}
      <button
        active={isSection3}
        onClick={onClickSecion3}
        disabled={isSection3}
      >
        section title3
      </button>
      {isSection3 ? <div>섹션3</div> : <></>}
    </>
  );
}
