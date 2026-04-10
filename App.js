import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import About from './components/About';

function App() {

const [tasks, setTasks] = useState([]);

const addTask = (task) => {
setTasks([...tasks, task]);
}

const deleteTask = (index) => {
setTasks(tasks.filter((task, i) => i !== index));
}

return (

<Router>

<h1 className="header-title">Student Task Manager</h1>

<Navbar/>

<div className="container">

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/add" element={<AddTask addTask={addTask}/>}/>
<Route path="/tasks" element={<TaskList tasks={tasks} deleteTask={deleteTask}/>}/>
<Route path="/about" element={<About/>}/>

</Routes>

</div>

</Router>

);

}

export default App;