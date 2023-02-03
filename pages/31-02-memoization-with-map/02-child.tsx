import { memo } from "react";

function WordChild(props: any) {
  console.log("child rendering", props.el);
  return (
    <>
      <span>{props.el}</span>
    </>
  );
}

export default memo(WordChild);
