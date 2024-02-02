import './App.css';
import SearchBar from './Components/SearchBar';
import WordDisplay from './Components/WordDisplay';
import NounSection from './Components/NounSection';
import VerbSection from './Components/VerbSection';
import {DictionaryProvider} from './Context/DictionaryProvider'; // Assuming you renamed UserContextProvider to DictionaryProvider
import { ThemeToggle } from './Components/ThemeToggle';

function App() {
	return (
		<DictionaryProvider>
			<ThemeToggle />
			<SearchBar />
			<WordDisplay />
			<NounSection />
			<VerbSection />
		</DictionaryProvider>
	);
}

export default App;