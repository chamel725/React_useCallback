//Memoization:자주 사용되는 값을 가상의 공간에 저장해뒀다가
//필요한 순간에 꺼내쓰는 방법 
//useCallback:인자로 전달한 callback함수 그 자체를 memoization해주는것
//인자 2개 받는다. 1:memoization해줄 callback함수, 2:dependency
//dependency가 바뀌어야 함수 초기화
import { useCallback, useEffect, useState } from 'react';

function App1() {
  const [number, setNumbrer] = useState(0);
  const[toggle, setToggle] = useState(true);

  //현재 number state에 어떤 숫자가 들어있는지 찍어주는 함수
  //someFunction:함수 객체가 가지고 있는 메모리의 주소를 가지고 있다.
  const someFunction = useCallback(() =>{
    console.log(`someFunc: number: ${number}`);
    return;
  },[number]);//number가 바뀔 떄 마다 다시 memoization



  useEffect(()=>{
    console.log('someFunction이 변경되었습니다')
  },[someFunction])

  return (
    <div>
      <input
      type = "number"
      value = {number}
      onChange = {(e) => setNumbrer(e.target.value)}
      />
      <button onClick={()=> setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick = {someFunction}>Call someFunc</button>
    </div>
  );
}

export default App1;
