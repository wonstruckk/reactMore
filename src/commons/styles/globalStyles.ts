import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "myfont";
  }

  //폰트만든다음에, 폰트이름을 폰트패밀리로 먹인다.
  //브라우저랜더링시 html,css,js순으로 다운받고 그 이후에 이미지와 폰트를 url
  //찾아서 다운로드한다. 이미지는 하나하나 주소가 잇어서 느리다.
  //이미지를 빨리 다운받아오기 위해서 webp일거임아마...리사이징.화질안떨어지게.
  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }
`;

// FOIT Flash Of Invisible Text = 폰트다운안받으면 안보여진다. 다운받고난담에보여짐.

// FOUT - Flash Of Unstyled Text = 다운받기전에 일단 보여주는데 스타일이 읎다. 다운받고나면 스타일 먹힘.

// 그래서 폰트 속도를 어케 빨리할까요???
// 1. 압축률 높은 폰트 다운받기.
// 2. SubsetFont : 경량화 폰트 다운받기
// ->  갂, 갏 같은 안쓰는 글자 제외하고 다운받기.
// 3. callback font -> 여러개 해노혹, 앞에거 다운실패하면 뒤에거 다운받게.
// reeact slic  k 캐러셀 구현 하귀.
