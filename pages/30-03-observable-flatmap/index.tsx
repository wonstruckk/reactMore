import { Observable } from "@apollo/client";
import { from } from "zen-observable";

export default function ObservableFlatmapPage() {
  const onClickButton = () => {
    // new Promise(()=>{})
    // new Observable(()=>{})
    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"]) // from 프로미스가뭔데...
      .flatMap((el) => from([`${el}결과에 qqq 적용`, `${el}결과에 zzz적용`]))
      .subscribe((el) => console.log(el));
  };

  return <button onClick={onClickButton}>클릭</button>;
}
