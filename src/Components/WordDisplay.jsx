import { useContext } from "react";
import { DictionaryContext } from "../Context/DictionaryProvider";

const WordDisplay = () => {
	const {data} = useContext(DictionaryContext);

	const word = data && data[0] ? data[0].word : '';
	const phonetic =
		data && data[0] && data[0].phonetics && data[0].phonetics.find((p) => p.text)
			? data[0].phonetics.find((p) => p.text).text
			: '';

	return (
		<div>
			<h1 className='text-5xl text-slate-800 font-bold text-center'>{word}</h1>
			{phonetic && <p className='text-2xl font-bold text-center text-purple-700'>{phonetic}</p>}
		</div>
	);
};

export default WordDisplay;
