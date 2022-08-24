import { useEffect, useState } from 'react';

export default function Exam5() {
    const [counter, setCounter] = useState(0);
    const [keyword, setkeyword] = useState('aaa');

    const countdown = () => setCounter(preVal => preVal === 0 ? 0 : preVal - 1); 
    const countUp = () => setCounter(preVal => preVal + 1);
    const onChangeText = (e) => {
        setkeyword(e.target.value);
    }

    useEffect(() => {
        if(keyword.length > 5) {
            console.log('AAA');
        }
    }, [keyword]);

    return(
        <div>
            <input
                type="text"
                placeholder='Search here...'
                value={keyword}
                onChange={onChangeText}
            />
            <h1>{counter}</h1>
            <button onClick={countUp}>click me up</button>
            <button onClick={countdown}>click me down</button>
        </div>
    );
}