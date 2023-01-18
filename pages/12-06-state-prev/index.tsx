import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // const handleOk = () => {
  //   setIsModalOpen((prev) => !prev);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen((prev) => !prev);
  // };

  const handleComplete = (address: Address) => {
    onToggleModal();
    // setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>
      {/* 모달종료 방식 -1 그냥 숨기기. */}
      {/* <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <DaumPostcodeEmbed onComplete={handleComplete} />;
      </Modal> */}
      {/* 모달종료 2번째 - 모달 삭제하는 방법. */}
      {/* modal의 state를 변경시켜서 리랜더링하기때문에 안에있는내용도 삭제가 된다. */}
      {isModalOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
