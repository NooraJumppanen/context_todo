import React, { useContext, useState, useEffect } from 'react';
import classes from './TodoList.module.css';
import { NotesContext } from '../Store/todoStore';

const TodoList = () => {
	const context = useContext(NotesContext);
	const [filteredValue, setFilteredValue] = useState();
	const [filterList, setFilteredList] = useState(context.notes);

	const removeHandler = (id) => {
		context.removeTodoItem(id);
	};

	useEffect(() => {
		if (filteredValue === 'true') {
			setFilteredList(
				context.notes.filter((item) => item.done === !!filteredValue)
			);
		} else if (filteredValue === 'false') {
			setFilteredList(
				context.notes.filter((item) => item.done !== !!filteredValue)
			);
		} else {
			setFilteredList(context.notes);
		}
	}, [filteredValue, context]);

	const filterHandler = (e) => {
		setFilteredValue(e.target.value);
	};

	return (
		<div className={classes.todos}>
			<h1>Notes:</h1>
			<select onChange={filterHandler}>
				<option value="all">All</option>
				<option value="false">Not done</option>
				<option value="true">Done</option>
			</select>

			{filterList.map((note) => {
				return (
					<div
						className={`${classes.todo} ${
							note.done ? classes.done : classes.notDone
						}`}
						key={note.id}
						onClick={() => context.doneTodo(note.id)}
					>
						<h2>{note.title}</h2>
						<p>{note.task}</p>
						<span
							className={`material-icons ${classes.delete}`}
							onClick={() => removeHandler(note.id)}
						>
							delete
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default TodoList;
