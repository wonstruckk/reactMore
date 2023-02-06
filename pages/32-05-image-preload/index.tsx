import { useRouter } from "next/router";
import { useEffect } from "react";
import { preloadImage } from "../../src/commons/libraries/preloadImage";

// 지금페이지는 그냥 컴포넌트화해서 사용하는게 좋다.

// 전역변수로 변해서 이페이지가 랜더링 되어도 새로고침이 안됨.
// 근데 매번 그럴수는 없으니.
// let qqq;

const PRELOAD_IMAGES = [];

export default function ImagePreloadPage() {
  const router = useRouter();

  useEffect(() => {
    preloadImage(PRELOAD_IMAGES);
  }, []);

  const onClickMove = () => {
    void router.push("/32-06-image-preload-moved");
  };

  return <button onClick={onClickMove}>페이지 이동하기</button>;
}
