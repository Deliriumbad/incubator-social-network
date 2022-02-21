import React, {useState} from 'react';
import './App.css';
import {TaskPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {

 let [tasks, setTasks] = useState<Array<TaskPropsType>>([
     { id: v1(), title: "HTML&CSS", isDone: true },
     { id: v1(), title: "JS", isDone: true },
     { id: v1(), title: "ReactJS", isDone: false },
     { id: v1(), title: "Redux", isDone: true }
 ])

    let[filter,setFilter] = useState<FilterValuesType>('all') //active

    console.log('---> tasks',tasks);
    let tasksForTodolist = tasks; //4

    if(filter==='completed'){
        tasksForTodolist = tasks.filter(el => el.isDone === true);
    }
    if(filter==='active'){
        tasksForTodolist = tasks.filter(el => el.isDone === false);//1
    }
    console.log('---> tasksForTodolist',tasksForTodolist);
    function changeFilter (value:FilterValuesType){
        setFilter(value);
    }

    function removeTask (newId:string){
        let filteredTask = tasks.filter(el => el.id !== newId);
        setTasks(filteredTask);
    }

    function addTask (title:string) {
        let newTask = { id: v1(), title: title, isDone: true };
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }

    console.log('render');
    return (
        <div className="App">
            <Todolist
                title='What to learn'
                task={tasksForTodolist}//1
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
