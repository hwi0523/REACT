import { useEffect, useState } from 'react';

function Hello() {
    useEffect(()=>{
        console.log('Hello!');
        return () => {
            console.log('Bye!!');
        };
    },[]);
    
    return(
        <div>
            <strong>Hello!!!</strong>
        </div>
    );
}

export default function Exam6() {
    const [showing, setShowing] = useState(false);
    const onClickBtn = () => {
        setShowing(showing => !showing);
        // console.log(showing);
        // showing 값이 true > false, flase > true  
    }
    
    return (
        <div>
            <button onClick={onClickBtn}>
                {showing ? 'hide' : 'show'}
            </button>
                {showing ? <Hello /> : null}
        </div>
    )
}
