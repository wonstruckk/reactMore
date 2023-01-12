export default function CounterStatePage() {
  const [count, setCount] = useState(0); // let count = 0

  function onClickPlus() {
    setCount(count + 1); // count = count + 1
  }

  function onClickMinus() {
    setCount(count - 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickPlus}>카운트 올리기</button>
      <button onClick={onClickMinus}>카운트 내리기</button>
    </>
  );
}
