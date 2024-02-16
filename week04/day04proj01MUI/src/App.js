import { useEffect, useState } from 'react';
import { List, Paper } from '@mui/material';
import "./App.css";
import Todo from './Todo';
import AddTodo from './AddTodo';
import axios from 'axios';

function App() {
    const [itmes, setItems] = useState([]);

    useEffect(()=>{
        // axios Ajax를 이용해서 서버에 있는 todoList 사용.
        // 모듈 설치 후 진행 : npm i -S axios
        axios.get('http://localhost:5000/todo')
        .then(function (response) {
            setItems(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    let todoItems = itmes.map(item=><Todo item={item} key={item.id} />);

    return (<Paper style={{margin: 16}} className='App'>
            <h1>Todo List</h1>
            <AddTodo />
            <List>{todoItems}</List>
    </Paper>);
}

export default App;