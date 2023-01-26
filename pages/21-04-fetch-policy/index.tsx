import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import FetchPolicyExample from "../../src/components/units/21-fetch-policy";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function GlobalStatePage() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>클릭하면 새로운 컴포넌트 나와용</button>
      {isOpen && <FetchPolicyExample />}
    </div>
  );
}
