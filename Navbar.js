import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

return (

<nav>

<Link to="/">🏠 Home</Link>
<Link to="/add">➕ Add Task</Link>
<Link to="/tasks">📋 Task List</Link>
<Link to="/about">ℹ About</Link>

</nav>

);

}

export default Navbar;