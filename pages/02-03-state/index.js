export default function SignupStatePage() {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mailError, setMailError] = useState("");

  const emailHandler = (event) => {
    //event.target - 작동된 태그
    //event.target.value - 작동된 태그에 입력된 값.
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onClickSignUp = () => {
    console.log(mail);
    console.log(password);
    //검증하기
    if (mail.includes("@") === false) {
      // alert("이메일이 올바르지 않습니다.");
      // document.getElementById("mailError").innerText =
      //   "이메일이 올바르지 않습니다.";
      setMailError("이메일 형식이 올바르지 않습니다.");
    } else {
      //메시지 알림 이전, 백에 있는 api요청하도록 해야함.
      alert("회원가입을 축하합니다.");
    }
  };

  return (
    <>
      이메일: <input type="text" onChange={emailHandler} />
      {/* <div id="mailError"></div> */}
      <div>{mailError}</div>
      비밀번호: <input type="password" onChange={passwordHandler} />
      <button onClick={onClickSignUp}>회원가입</button>
    </>
  );
}
