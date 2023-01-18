import styled from "@emotion/styled";
import { Rate } from "antd";
// import "antd/dist/antd.css";

import { useState } from "react";

const MyStar = styled(Rate)`
  color: red;
  font-size: 50px;
`;

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);
  // 아이콘은 id사용불가능함
  // 그래서 div에 넣어서 사용.
  // 이 부분을 굳이 이렇게 변수로 지정하지 않고.
  const stark = (starkNum: number) => setValue(starkNum);

  // 아래와 같이 change안에 바로 지정할 수 있다.
  {
    /* <MyStar onChange={setValue(starkNum)}; */
  }

  return <MyStar onChange={stark} />;
}
