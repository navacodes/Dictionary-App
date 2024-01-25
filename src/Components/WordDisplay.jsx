const WordDisplay = ({ data }) => {
	const word = data && data[0] ? data[0].word : '';
	const phonetic =
		data && data[0] && data[0].phonetics && data[0].phonetics.find((p) => p.text)
			? data[0].phonetics.find((p) => p.text).text
			: '';

	return (
		<div>
			<h1>{word}</h1>
			{phonetic && <p>{phonetic}</p>}
		</div>
	);
};

export default WordDisplay;
