//컴포넌트 바깥에 적어서 리랜더링 일어나도 배열계속 생성되지 않도록 했다. -> 최적화와 연관이 있음.
const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인" },
  { number: 3, title: "딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "호랑이" },
  { number: 8, title: "천해염" },
  { number: 9, title: "과일세트" },
  { number: 10, title: "굴" },
];

const classmates = [
  { name: "철수", age: 10, school: "토끼초등학교" },
  { name: "세준", age: 13, school: "다람쥐초등학교" },
  { name: "용호", age: 11, school: "토끼초등학교" },
];

export default function MapFruitsPage() {
  const aaa = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인" },
    { number: 3, title: "딸기" },
  ].map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  const bbb = FRUITS.map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  const ccc = classmates.map((el) => {
    if (el.school === "토끼초등학교") {
      return { ...el, candy: 10 };
    } else {
      return { ...el, name: el.name + "어린이" };
    }
  });

  return (
    <div>
      {FRUITS.filter((el) => el.number % 2 === 0).map((cur) => (
        <div>
          {cur.number} {cur.title}
        </div>
      ))}

      <div>
        {ccc.map((el) => (
          <>
            <div>{el.name}</div>
            <div>{el.age}</div>
            <div>{el.candy}</div>
          </>
        ))}
      </div>
    </div>
  );
}
