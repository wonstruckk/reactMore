interface ILayout {
  children: JSX.Element;
}

export default function Layout(props: ILayout) {
  return (
    <>
      <div>this is header</div>
      <div>this is banner</div>
      <div>this is menu</div>
      <div>{props.children}</div>
      <div>this is footer</div>
    </>
  );
}
