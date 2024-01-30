import { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import WordDisplay from './Components/WordDisplay';
import { useDictionaryApi } from './Hooks/useDictionaryApi';
import NounSection from './Components/NounSection';
import VerbSection from './Components/VerbSection';

function App() {
	const [word, setWord] = useState('');
	const { data, search } = useDictionaryApi(word);
	return (
		<>
			<SearchBar word={word} setWord={setWord} search={search} />
			<WordDisplay word={word} data={data} />
			<NounSection data={data} />
			<VerbSection data={data} />
		</>
	);
}

export default App;
