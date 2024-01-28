const WordDisplay = ({ data }) => {
	const word = data && data[0] ? data[0].word : '';
	const phonetic =
		data && data[0] && data[0].phonetics && data[0].phonetics.find((p) => p.text)
			? data[0].phonetics.find((p) => p.text).text
			: '';
	const meaningsNoun = data && data[0] && data[0].meanings ? data[0].meanings : [];

	return (
		<div>
			<h1 className='text-4xl text-purple-500 font-bold text-center'>{word}</h1>
			{phonetic && <p className='text-2xl font-bold text-center'>{phonetic}</p>}

			{meaningsNoun && meaningsNoun.length > 0 && (
				<div>
					<li className='text-2xl font-bold text-center'>{meaningsNoun[0].partOfSpeech}</li>

					{meaningsNoun[0].definitions.map((def, index) => (
						<div key={index}>
							<p className='text-xl text-center'>{def.definition}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default WordDisplay;
