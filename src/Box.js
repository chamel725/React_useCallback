import React, { useEffct, useState } from 'react';

const Box = ({ createBoxStyle })=>{
    //style state 빈 object로 초기화
    const [style, setStyle] = useState({});

    //useEffect에 들어갈 떄 마다 box 키우기
    //createBoxStyle함수가 return한 값을 setStyle로 넘겨주는 함수
    //createBoxStyle의 값이 바뀌면 초기화
    useEffct(() =>{
        console.log('박스 키우기');
        setStyle(createBoxStyle());
    },[createBoxStyle]);

    return <div style = {style}></div>;
};

export default Box;