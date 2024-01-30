
const NounSection = ({data}) => {
    const meaningsNoun = data && data[0] && data[0].meanings ? data[0].meanings : [];
  return (
    <div>
    {meaningsNoun && meaningsNoun.length > 0 && (
				<div>
					<li className='text-2xl font-bold text-center'>{meaningsNoun[0].partOfSpeech}</li>

					{meaningsNoun[0].definitions.slice(0, 3).map((def, index) => (
						<div key={index}>
							<p className='text-xl text-center'>{def.definition}</p>
							
						</div>
					))}
					
					<h2 className="text-lg text-purple-700 text-bold text-center">
						Synonyms: {meaningsNoun[0].synonyms}</h2>
				</div>
			)}
    </div>
  )
}

export default NounSection