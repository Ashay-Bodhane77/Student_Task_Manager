import React, { useState } from 'react';

function AddTask({ addTask }) {

const [task, setTask] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
addTask(task);
setTask("");
}

return (

<div>

<h2>Add Task</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
value={task}
onChange={(e) => setTask(e.target.value)}
placeholder="Enter task"
/>

<button type="submit">Add</button>

</form>

</div>

);

}

export default AddTask;