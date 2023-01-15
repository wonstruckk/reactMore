export default function qwer() {
  //타입 추론
  let aaa = "안녕하세용";
  aaa = "string";

  //타입 명시
  let bbb: number = 1234;
  bbb = 12345;

  //문자타입(선언 할당 분리)
  let ccc: string;
  ccc = "ㅎㅇ요";

  //숫자
  let ddd: number = 10;
  ddd = 135135;

  //불린
  let eee: boolean = true;
  eee = false;
  //js에서는 true인데, 타입에선 voolean이 아니라서 false로 사용불가하다.
  // eeee = "true";

  //배열 명시
  let fff: number[] = [1, 2, 3, 4, 5];
  let ggg: string[] = ["1", "2", "3", "4"];
  let hhh: (string | number)[] = ["1", "2", "3", 10];

  //객체 타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }

  const profile: IProfile = {
    name: "1",
    age: 8,
    school: "school",
  };

  //함수타입 = 타입추론 불가능함. 어디서든 호출하기 때문에 인자가 바뀔수 있음, 인자뒤는 리턴타입을 명시할 수 있음.
  const add = (
    number1: number,
    number2: number,
    unit: string
  ): number | string => {
    return number1 + number2 + unit;
  };

  const result = add(1000, 2000, "3");

  return (
    <>
      <div>1234</div>
    </>
  );
}
