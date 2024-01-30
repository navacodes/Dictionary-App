const VerbSection = ({ data }) => {
	const meaningsVerb = data && data[0] && data[0].meanings ? data[0].meanings : [];
	const source = data && data[0] ? data[0].sourceUrls : [];

	return (
		<div>
			{meaningsVerb && meaningsVerb.length > 1 && (
				<div>
					<li className='text-2xl font-bold text-center'>{meaningsVerb[1].partOfSpeech}</li>
					{meaningsVerb[1].definitions.slice(0, 3).map((def, index) => (
						<div key={def.definition}>
							<p className='text-xl text-center'>
								<br />
								{def.definition}
							</p>
							<p className='text-md text-center text-gray-500 italic'>{def.example}</p>
						</div>
					))}
				</div>
			)}
			{source && source.length > 0 && (
				<h2 className='text-center'>
					Source:{' '}
					<a href={source[0]} target='_blank' rel='noopener noreferrer'>
						{source[0]}
					</a>
				</h2>
			)}
		</div>
	);
};

export default VerbSection;
