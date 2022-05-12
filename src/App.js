//size를 변경시켜주면 App component가 rendring이 되고
//App component가 rendring되면 변수가 다 초기화 - createBoxStyle도 초기화
//-새로 할당된 함수 오브젝트의 주소를 가지게 됨 - Box Component의 prop으로 전달
//-Box component 안에서 useEffect의 createBoxStyle변경인식
//setStyle로 Box style변경 

import React, { useState } from 'react';
import Box from './Box';

function App(){
    const [size, setSizes] = useState(100);

    //css를 담은 object를 반환
    const createBoxStyle = () =>{
        return{
            backgroundColor: 'pink',
            width: `${size}px`,
            height: `${size}px`,
        };
    };
    return(
        <div>
            <input
            type = "text"
            value= {size}
            onChange = {(e)=> setSizes(e.target.value)}
            />
            {/* createBoxStyle을 props로 받는다 */}
            <Box createBoxStyle={createBoxStyle}/>
        </div>
    );
}

export default App;