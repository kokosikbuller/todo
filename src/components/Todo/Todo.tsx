import React, { FC, useState } from 'react';
import { ITodo } from '../../types/todo';
import { MyButton, TodoItem, TodoLi } from './Todo.styled';
import { MdDeleteOutline, MdOutlineEditCalendar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { change, remove, update } from '../../store/rootSlice';
import Modal from '../Modal/Modal';

interface TodoProps {
	todo: ITodo;
}

const Todo: FC<TodoProps> = ({ todo }) => {
	const dispatch = useDispatch();
	const [isModal, setIsModal] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');

	const updateTodo = () => {
		if (!value) return;
		dispatch(update({ id: todo.id, text: value }));
		setValue('');
		setIsModal(false);
	};

	return (
		<TodoLi bgColor={todo.isChecked ? 'rgba(216, 212, 212, 0.651)' : '#fff'}>
			<TodoItem>
				<div>
					<input
						type='checkbox'
						onChange={() => dispatch(change(todo.id))}
						checked={todo.isChecked}
						id={todo.text}
					/>
					<label htmlFor={todo.text}>{todo.text}</label>
				</div>
				<div>
					<MyButton
						type='button'
						onClick={() => setIsModal(true)}
						bgColor={'green'}
						padding={'5px'}
					>
						<MdOutlineEditCalendar size={15} />
					</MyButton>
					<MyButton
						type='button'
						onClick={() => dispatch(remove(todo.id))}
						bgColor={'red'}
						padding={'5px'}
					>
						<MdDeleteOutline size={15} />
					</MyButton>
				</div>
			</TodoItem>
			{isModal && (
				<Modal
					setIsModal={setIsModal}
					value={value}
					setValue={setValue}
					updateTodo={updateTodo}
				/>
			)}
		</TodoLi>
	);
};

export default Todo;
