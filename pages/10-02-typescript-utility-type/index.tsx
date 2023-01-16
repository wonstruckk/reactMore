export default function TypeScriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  //Utility Type적용하기.

  //1. Pick - 선택한 것만 추가해서 사용.
  type aaa = Pick<IProfile, "name" | "age">;

  //2. Omit - 선택한 것을 제외.
  type bbb = Omit<IProfile, "school">;

  //3. Partial - optional과 비슷하다. 있어도되고 없어도되고.
  type ccc = Partial<IProfile>;

  //4. Required - 전부 필수. 모든 타입이 들어가야함.
  type ddd = Required<IProfile>;

  //5. Record
  type eee = "kim" | "in" | "won"; //union타입(또는)
  //사용불가능하다, union에 있는것 만 사용가능.
  // let children : eee = "noah"

  type fff = Record<eee, IProfile>; // key가 eee각각, value가 IProfile타입이 된다.

  //type vs interface차이 -> 선언과 병합.
}
