import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../App.css";
import { addTodo, deleteTodo, removeAllTodo } from '../actions/toDoAction';

const ToDos = () => {
    const [inputValue, setinputValue] = useState('')

    const dispatch = useDispatch()

    const list = useSelector((state) => state.toDoRedusers.list)

    return (
        <div>
            <h2 className="todo-heading">ToDos Application</h2>

            <div id="main-div" className="input-group mb-4">
                <input type="text" className="form-control" placeholder="Recipient's username"
                    value={inputValue} onChange={(event) => setinputValue(event.target.value)} />
                <div className="input-group-append">
                    <button id="add" className="btn btn-primary" type="button"
                        onClick={() => dispatch(addTodo(inputValue), setinputValue(''))}>Add</button>
                    <button id="remove" className="btn btn-danger" type="button"
                        onClick={() => dispatch(removeAllTodo())}>Remove_All</button>
                </div>
            </div>
            <div className="show-items">
                {
                    list.map((ele) => {
                        return(
                            <div className="each-items" key ={ele.id}>
                            <h2>{ele.data}</h2>
                            <button className="btn btn-danger" type="button"
                            onClick={() => dispatch(deleteTodo(ele.id))}>Delete</button>
                        </div>
                        )
                       
                    })
                }



            </div>
        </div>
    )
}

export default ToDos;
