import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import FetchPolicyExample from "../../src/components/units/21-fetch-policy";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  const onClickMove = () => {
    void router.push("/21/05-fetch-policy-moved");
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>클릭하면 새로운 컴포넌트 나와용</button>
      {isOpen && <FetchPolicyExample />}
      <button onClick={onClickMove}>버튼클릭하면페이지이동되유</button>
    </div>
  );
}
