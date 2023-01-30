import Head from "next/head";
import { useEffect } from "react";

// window를 globalThis라고 부른다.
declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=20fd238403289e788a2d52a1fa0ae1fe";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  // style은 객체인데 아래처럼 넣다보니 중괄호가 두개가 된거임.
  return (
    <>
      {/* script다운받은 부분은 window로 들어가게되고, 그래서 window객체를 이용한 widnow.kakao가 되는거다. */}
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=20fd238403289e788a2d52a1fa0ae1fe"
        ></script>
      </Head> */}
      <div id="map" style={{ width: 500, height: 400 }}></div>;
    </>
  );
}
