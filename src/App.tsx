import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
	const store = useSelector((state: RootState) => state.root);
	console.log(store);

	return <div className='App'>lol</div>;
}

export default App;
