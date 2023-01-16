import styled from "@emotion/styled";
import { IBlueButtonProps } from "./BoardWrite.types";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  font-size: ${(props: IBlueButtonProps) => props.aaa};
  background-color: ${(props: IBlueButtonProps) =>
    props.ccc ? "yellow" : "red"};
`;

//export와 export default의 차이점
//export default = import부분에서 이름을 바꾸어서 받아도 상관이 없다. 중괄호도 필요없다.
//export는 import부분에서 이름을 정확하게 해주어야 한다. 중괄호도 들어가야 한다.(2개이상인경우)
//ex)
// export const RedInput = styled.input`
/* border-color: red; */
// `;

// export const BlueButton = styled.button`
/* background-color: blue; */
// `;

//ex)
// export default function Aaa (){
// return(
// <div>111</div>
// )
// }

// import AnynameAnyNumber from 'location'

//같이 받을수도 있따. import qqq,{BlueButton, RedInput} from 'location'

//전부 다 받을수도 있다.
//import * as name from 'location'
