import './App.css';
import SearchBar from './Components/SearchBar';
import WordDisplay from './Components/WordDisplay';
import NounSection from './Components/NounSection';
import VerbSection from './Components/VerbSection';
import {DictionaryProvider} from './Context/DictionaryProvider'; // Assuming you renamed UserContextProvider to DictionaryProvider

function App() {
	return (
		<DictionaryProvider>
			<SearchBar />
			<WordDisplay />
			<NounSection />
			<VerbSection />
		</DictionaryProvider>
	);
}

export default App;