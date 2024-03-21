import React,{useState} from "react";
import "./Todo.css";


export default function Todo() {
    const [todoInput, updateInput] = useState()

    const [todoList, updateTodoList] = useState([
        {
            id: 1,
            task: ' Learn React'
        },
        {
            id: 2,
            task: ' Learn Angular'
        }
    ])
    let nextId = 3 
    function addNewTodo(){
        if(todoInput === ''){
            alert('Add some task !')
        }else{
        let  newTodos = [
                ...todoList,
                {
                    id: nextId ++,
                    task: todoInput
                }
            ]
            updateTodoList(newTodos);
            updateInput('')
        }
    }

    function deleteTodo(id){
     let updatedTodos = todoList.filter(
            (todo)=>{
                return  todo.id!==id
            }
        )
        updateTodoList(updatedTodos)
    }

  return (
    <div className="container mt-5 w-50">
        <h2 className="text-center">Todo App Using ReactJS</h2>
      <div className="input-group">
        <input className="form-control" onChange={(e)=>{
            let task = e.target.value;
            updateInput(task)
        }} type="text" value={todoInput} />
        <button className="btn btn-primary" onClick={()=>{addNewTodo()}}>Add</button>
      </div>
        <ul className="list-group mt-4">

            {/* <li className="list-group-item">
                <p>Todo1</p>
                <button className="btn">❌</button>
            </li>
            <li className="list-group-item">
                <p>Todo2</p>
                <button className="btn">❌</button>
            </li> */}

            {
                todoList.map((todo) =>{
                    return(
                        <li className="list-group-item">
                            <p>{todo.task}</p>
                            <button className="btn" onClick={()=>{
                                deleteTodo(todo.id)
                            }}>❌</button>
                        </li>
                    )
                })
            }

        </ul>
    </div>
  );
}

