
const NounSection = ({data}) => {
    const meaningsNoun = data && data[0] && data[0].meanings ? data[0].meanings : [];
  return (
    <div>
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
  )
}

export default NounSection