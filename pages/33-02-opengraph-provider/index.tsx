import Head from "next/head";

// 페이지 별로 헤드/메타태그를 따로 만들어줘야 한다. 이왕사용할거면. 좋은 사용자 경험을 위해서.
export default function OpengraphProviderPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="중고마켓" />
        <meta property="og:description" content="welcome" />
        <meta property="og:image" content="url" />
      </Head>
      <div>
        중고마켓입니다 안녕하세요(여기는 body로 미리보기와 전혀 상관 없다)
      </div>
    </>
  );
}
