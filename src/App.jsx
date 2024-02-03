import './App.css';
import SearchBar from './Components/SearchBar';
import WordDisplay from './Components/WordDisplay';
import NounSection from './Components/NounSection';
import VerbSection from './Components/VerbSection';
import MenuBar from './Components/MenuBar';
import { DictionaryProvider } from './Context/DictionaryProvider'; // Assuming you renamed UserContextProvider to DictionaryProvider

function App() {
	return (
		<DictionaryProvider>
			<div className='flex flex-col flex-wrap text-left m-auto p-10 max-w-6xl mx-auto'>
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
