import { PlayCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const Icon = styled(PlayCircleOutlined)`
  color: red;
  font-size: 50px;
`;

export default function LibraryIconPage() {
  // 아이콘은 id사용불가능함
  // 그래서 div에 넣어서 사용.
  return (
    <div id="rrqwer">
      <Icon id="qwer123" />;
    </div>
  );
}
