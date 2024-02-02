import { useContext } from 'react';
import { DictionaryContext } from '../Context/DictionaryProvider';

const NounSection = () => {
	const { data } = useContext(DictionaryContext);
	const meaningsNoun = data?.[0]?.meanings ?? [];
	const titleClass = 'text-2xl font-bold text-center';
	const definitionClass = 'text-xl text-center';
	const synonymsClass = 'text-lg  text-bold text-center';

	return (
		<div>
			{meaningsNoun.length > 0 && (
				<div>
					<li className={titleClass}>{meaningsNoun[0].partOfSpeech}</li>
					{meaningsNoun[0].definitions.slice(0, 3).map((def, index) => (
						<div key={index}>
							<p className={definitionClass}>{def.definition}</p>
						</div>
					))}
					<h2 className={synonymsClass}>Synonyms: {meaningsNoun[0].synonyms}</h2>
				</div>
			)}
		</div>
	);
};

export default NounSection;
