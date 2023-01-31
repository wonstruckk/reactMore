import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const onClickPayment = () => {
    var IMP = window.IMP; // 생략 가능
    IMP.init("imp17745525"); // 예: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // v,bank등
        // merchant_uid: "ORD20180131-0000011", // 중복될 시, 결제 안됨.₩
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // ** 모바일의 경우 , 모바일에서는 결제시 결제페이지로 사이트가 이동되서 리다이렉트해줘야됨. ** //
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          // const paymentDate = new Date(); 프론트엔드에서 시간 만드는 것은 안됨.
          // 시간은 백엔드에서 어떻게든 해야합니다.ㅋㅁ';ㅣㅏㅓㅗㅎㄹㅇㄴㅁ4

          // 백엔드에 결제 관련 정보 넘기기, mutation걸기.
          // createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
