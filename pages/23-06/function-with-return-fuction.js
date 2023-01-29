function aaa() {
  const apple = 10;
  return function 이름이아무상관없다() {
    const banana = 20;

    console.log(banana);
    console.log(apple);
  };
}

// 실행시키려면, 함수를 리턴하는 함수. higher order function HOF
// aaa()()

function aaa(apple) {
  return function 이름이아무상관없다(banana) {
    console.log(banana);
    console.log(apple);
  };
}

aaa(10)(20); // 인자넣기.

//** 익명화살표함수로 고차함수만들기 **//
const aaa = (apple) => (banana) => {
  console.log(banana);
  console.log(apple);
};

bbb(10)(20);
