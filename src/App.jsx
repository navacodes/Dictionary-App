import './App.css';
import SearchBar from './Components/SearchBar';
import WordDisplay from './Components/WordDisplay';
import NounSection from './Components/NounSection';
import VerbSection from './Components/VerbSection';
import MenuBar from './Components/MenuBar';
import { DictionaryProvider } from './Context/DictionaryProvider';

function App() {
	const wrapper = 'flex flex-col flex-wrap text-left m-auto p-10 max-w-6xl mx-auto';
	return (
		<DictionaryProvider>
			<div className={wrapper}>
				<MenuBar />
				<SearchBar />
				<WordDisplay />
				<NounSection />
				<VerbSection />
			</div>
		</DictionaryProvider>
	);
}

export default App;
