import {useState} from "react";

export default function TodoApp() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    
    const onChange = (e) => {
        setTodo(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault(); // 이벤트 발생을 막는다
        if(todo === ''){return;}
        setTodoList(preVal => [todo, ... preVal]);
        console.log(todo);
        setTodo('');
    } 


    return(
        <div>
            <h1>My Todo List</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Whire your to do..."
                    value={ todo }
                    onChange={ onChange }
                />
                <button onClick={onSubmit}>Add To do</button>
            </form>
            <ul>
                {todoList.map((item,idx) => (<li key={idx}>{item}</li>)) }
            </ul>
        </div>
    );
}