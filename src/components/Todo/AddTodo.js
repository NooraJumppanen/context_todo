import React, { useState, useContext } from 'react';
import classes from './AddTodo.module.css';
import Button from '../UI/Button';

import { NotesContext } from '../Store/todoStore';

const AddTodo = () => {
	const [todo, setTodo] = useState({ title: '', task: '' });
	const context = useContext(NotesContext);
	const changeHandler = (e) => {
		const { name, value } = e.target;

		setTodo((prevState) => ({ ...prevState, [name]: value }));
	};

	const addHandler = (e) => {
		e.preventDefault();
		// console.log('onsubmit form', todo);
		context.addTodoItem(todo);
	};

	// const filterHandler = (e) => {
	// 	console.log('filter button was clicked');

	// 	const doneTasksArray = context.notes.filter((item) =>
	// 		item.done ? 'task is done' : 'task is not done'
	// 	);
	// 	console.log(doneTasksArray);

	// };

	return (
		<form onSubmit={addHandler} className={classes.input}>
			<div>
				<label htmlFor="title">Title</label>
				<input type="text" id="title" name="title" onChange={changeHandler} />
			</div>
			<div>
				<label htmlFor="task">Task</label>
				<input type="text" id="task" name="task" onChange={changeHandler} />
			</div>
			<Button type="submit">Add Task</Button>
			{/* <Button onClick={filterHandler}>Show done tasks</Button> */}
		</form>
	);
};

export default AddTodo;
