import React, { useContext } from 'react';
import classes from './TodoList.module.css';
import { NotesContext } from '../Store/todoStore';

const TodoList = () => {
	const context = useContext(NotesContext);
	console.log(context);

	const removeHandler = (id) => {
		// console.log('item id that was clicked:', id);
		context.removeTodoItem(id);
	};

	return (
		<div className={classes.todos}>
			<h1>Notes:</h1>
			{context.notes.map((note) => {
				return (
					<div
						className={classes.todo}
						key={note.id}
						onClick={() => removeHandler(note.id)}
					>
						<h2>
							{note.id}. {note.title}
						</h2>
						<p>{note.task}</p>
					</div>
				);
			})}
		</div>
	);
};

export default TodoList;
