import {useState} from 'react';
// 배열로 넘어온다 부분만 받는다

function Exam2() {

    // const data = useState(0); 
    // const counter = data[0];
    // const setCounter = data[1];

    const [counter, setCounter] = useState(1);
    // const [counter2, setCounter2] = useState(2);

    function countUp() {
        // counter = counter + 1;
        // console.log(counter);
        // console.log(data);
        // setCounter(counter+1);
        setCounter(preVal => preVal + 10); // 콜백함수 직접 보내는것 보다 안정적
    }

    return (
        <div>
            <h1>클릭 카운터 수:{counter}</h1>
            <button onClick={countUp}>Click Me</button>
        </div>
    );
}

export default Exam2;