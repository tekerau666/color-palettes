import {FC} from "react";
import {ITodo} from "./types/Types";

interface TodoItemProps {
	todo: ITodo;
}
export const TodoItem: FC <TodoItemProps> = ({ todo }) => {
	return (
		<>
			<div>
				<input type="checkbox" checked={todo.completed}/>
				{todo.id} - {todo.title}
			</div>
		</>
	)
}