interface IProps {
  school: string;
  children: JSX.Element;
}

export default function Layout(props: IProps) {
  return (
    <>
      <div>반갑습니다. 헤더입니다.</div>
      <div>{props.school} 베너입니다.</div>
      <div> 네비게이션입니다</div>
      <div>{props.children}</div>
    </>
  );
}
