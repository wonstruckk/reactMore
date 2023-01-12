export default function CounterLetDocumentPage() {
  function handlePlus() {
    const count = Number(document.getElementById("count").innerText) + 1;
    document.getElementById("count").innerText = count;
  }

  function handleMinus() {
    const count = Number(document.getElementById("count").innerText) - 1;
    document.getElementById("count").innerText = count;
  }

  return (
    <>
      <div id="count">0</div>
      <button onClick={handlePlus}>카운트 올리기</button>
      <button onClick={handleMinus}>카운트 내리기</button>
    </>
  );
}
