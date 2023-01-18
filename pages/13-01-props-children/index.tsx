import Example from "../../src/components/units/13-props-children";

export default function PropsChildrenPage() {
  return (
    <Example school="다람이">
      <>
        <input type="text" />
        <button></button>
        <div>게시글 목록 페이지</div>
        <div>게시글 등록 페x이지</div>
      </>
    </Example>
  );
}
