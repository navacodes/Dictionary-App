import { useContext } from 'react';
import { DictionaryContext } from '../Context/DictionaryProvider';

const VerbSection = () => {
	const { data } = useContext(DictionaryContext);
	const meaningsVerb = data?.[0]?.meanings ?? [];
	const source = data?.[0]?.sourceUrls?.[0];

	const titleClass = 'text-3xl font-bold text-left text-secondary list-none pb-6 pt-6';
	const definitionClass = 'text-xl mb-3';
	const exampleClass = 'text-md text-left text-accent italic font-light mb-3 ';
	const sourceClass = 'text-left italic text-base-content text-sm';
	const wrapper = 'flex flex-col gap-3 justify-space-between text-left';

	return (
		<div className={wrapper}>
			{meaningsVerb.length > 1 && (
				<div>
					<li className={titleClass}>{meaningsVerb[1].partOfSpeech}</li>
					{meaningsVerb[1].definitions.slice(0, 3).map((def) => (
						<div key={def.definition}>
							<li className={definitionClass}>{def.definition}</li>
							{def.example && <p className={exampleClass}>{`"${def.example}"`}</p>}
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
