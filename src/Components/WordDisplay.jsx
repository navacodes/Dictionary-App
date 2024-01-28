const WordDisplay = ({ data }) => {
	const word = data && data[0] ? data[0].word : '';
	const phonetic =
		data && data[0] && data[0].phonetics && data[0].phonetics.find((p) => p.text)
			? data[0].phonetics.find((p) => p.text).text
			: '';

	return (
		<div>
			<h1 className='text-4xl text-purple-500 font-bold text-center'>{word}</h1>
			{phonetic && <p className='text-2xl font-bold text-center'>{phonetic}</p>}
		</div>
	);
};

export default WordDisplay;
