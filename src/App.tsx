import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import Todo from './components/Todo/Todo';
import { useState } from 'react';
import { add } from './store/rootSlice';
import {
	Application,
	ButtonAdd,
	HeaderWrapper,
	InputAdd,
	TodoH1,
	TodoUl,
	TodoWrapper,
} from './App.styled';

function App() {
	const { todos } = useSelector((state: RootState) => state.root);
	const dispatch = useDispatch();
	const [value, setValue] = useState<string>('');

	const addTodo = () => {
		if (!value) return;
		const todo = {
			id: todos.length + 1,
			text: value,
			isChecked: false,
		};
		setValue('');
		dispatch(add(todo));
	};

	return (
		<Application>
			<HeaderWrapper>
				<TodoH1>Todos ({todos.length})</TodoH1>
			</HeaderWrapper>
			<TodoWrapper>
				<InputAdd
					onChange={(e) => setValue(e.target.value)}
					value={value}
					placeholder='Enter todo here'
					type='text'
				/>
				<ButtonAdd onClick={addTodo}>Submit</ButtonAdd>
				{todos.length > 0 && (
					<TodoUl>
						{todos.map((item) => (
							<Todo key={item.id} todo={item} />
						))}
					</TodoUl>
				)}
			</TodoWrapper>
		</Application>
	);
}

export default App;
