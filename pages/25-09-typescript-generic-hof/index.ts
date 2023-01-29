// 1. HOF 일반타입

export function first1(arg1: string) {
  return function second1(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}

const result = first1("철수")(9);

// 2. any 타입.
export function first2(arg1: any) {
  return function second2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}

const result2 = first2("철수")(9);

// 3. Generic으로 치환.
export function first3<T>(arg1: T) {
  return function second3(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result3 = first2("철수")(9);

// 4. Generic으로 치환. ㅅ화살표함수
// prettier-ignore
const first4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

const result4 = first2("철수")(9);

// 5. HOC - generic타입, 컴포넌트에 응용
// prettier-ignore
const withAuth = <C>(Component:C) => <P>(Props:P) :[C,P] =>{
  return [Component,Props]
}

const result5 = withAuth("Bbb")({ qqq: "철수" });
