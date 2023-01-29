// 1.primitive 타입

const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("철수", 123, true);

//
//
// 2. any 타입. => 타입사용을 안하는것과 같다.
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
};

const result = getAny("철수", 123, true);

// 3. unknown타입.
// 인자가 어떤 타입이 들어올지는 모르지만, 사용하기 위해서는 타입지정을 해서 사용해주어야 한다.
// 예외처리 해서 사용할수 있기 때문에 any<<unknown이 더 안전하다.
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
};

const result = getAny("철수", 123, true);

// 4. Generic 타입. -1.
// 인자의 타입이 어떤건지는 모르지만, 일단 들어오게 되면 그 타입으로 내가지정한이름의 타입이 정해진다. Mytype1 = string이 되는거지.
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result = getGeneric("철수", 123, true);

// 5. Generic 타입 -2.
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result = getGeneric2("철수", 123, true);

// 6. Generic 타입 -3.
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result = getGeneric3("철수", 123, true);

// 6. Generic 타입 -4. => 화살표함수변경
function getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
}

const result = getGeneric4("철수", 123, true);