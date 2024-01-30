import {useContext} from 'react';
import {DictionaryContext} from '../Context/DictionaryProvider';

const VerbSection = () => {
	const {data} = useContext(DictionaryContext);
	const meaningsVerb = data?.[0]?.meanings ?? [];
	const source = data?.[0]?.sourceUrls?.[0];

	const titleClass = 'text-2xl font-bold text-center';
	const definitionClass = 'text-xl text-center';
	const exampleClass = 'text-md text-center text-gray-500 italic';
	const sourceClass = 'text-center';

	return (
		<div>
			{meaningsVerb.length > 1 && (
				<div>
					<li className={titleClass}>{meaningsVerb[1].partOfSpeech}</li>
					{meaningsVerb[1].definitions.slice(0, 3).map((def) => (
						<div key={def.definition}>
							<p className={definitionClass}>
								<br />
								{def.definition}
							</p>
							<p className={exampleClass}>{def.example}</p>
						</div>
					))}
				</div>
			)}
			{source && (
				<h2 className={sourceClass}>
					Source:{' '}
					<a href={source} target='_blank' rel='noopener noreferrer'>
						{source}
					</a>
				</h2>
			)}
		</div>
	);
};

export default VerbSection;
