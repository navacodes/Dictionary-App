import './App.css';
import SearchBar from './Components/SearchBar';
import WordDisplay from './Components/WordDisplay';
import NounSection from './Components/NounSection';
import VerbSection from './Components/VerbSection';
import MenuBar from './Components/MenuBar';
import { DictionaryContext, DictionaryProvider } from './Context/DictionaryProvider';
import LandingPage from './Components/LandingPage';
import { useContext } from 'react';

function App() {
	const wrapper = 'flex flex-col flex-wrap text-left m-auto p-10 max-w-6xl mx-auto min-h-screen';

	const MainContent = () => {
		const { data } = useContext(DictionaryContext);
		return data ? <WordDisplay /> : <LandingPage />;
	};

	return (
		<DictionaryProvider>
			<div className={wrapper}>
				<MenuBar />
				<SearchBar />
				<MainContent />
				<NounSection />
				<VerbSection />
			</div>
		</DictionaryProvider>
	);
}

export default App;
