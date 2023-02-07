import axios from "axios";

export default function OpengrapDeveloperPage() {
  const onClickEnter = async () => {
    // 1. 채팅 데이터에 주소가 있는지 찾아보기.(ex) https://로시작)
    // 2. 해당주소로 스크래핑 하기
    const result = await axios.get("https://www.gmarket.co.kr"); // cors : https://www.naver.com 걸림
    console.log(result.data);
    // 3. 메타태그에서 오픈그래프(og:) 찾기
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og:"))
    );
  };

  return (
    <>
      <button onClick={onClickEnter}>채팅후 엔터</button>
    </>
  );
}
