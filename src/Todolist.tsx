import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

export type TodolistPropsType = {
    title: string
    task: Array<TaskPropsType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void

}

export type TaskPropsType = {
    id: string
    title: string
    isDone: boolean
}

export function Todolist(props: TodolistPropsType) {

    let [newTaskTitle, setNewTaskTitle] = useState('');

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask(newTaskTitle);
            setNewTaskTitle('');
        }
    }
    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('');
    }
    const onAllClickHandler = () => props.changeFilter('all')
    const onActiveClickHandler = () => props.changeFilter('active')
    const onCompletedClickHandler = () => props.changeFilter('completed')

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {
                    props.task.map(elem => {
                        const onRemoveHandler = () => props.removeTask(elem.id);
                        return <li key={elem.id}>
                            <input type="checkbox" checked={elem.isDone}/><span>{elem.title}</span>
                            <button onClick={onRemoveHandler}>X</button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    );
}