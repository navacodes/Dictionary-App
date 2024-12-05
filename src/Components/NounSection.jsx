import { useContext } from 'react';
import { DictionaryContext } from '../Context/DictionaryProvider';

const NounSection = () => {
  const { data } = useContext(DictionaryContext);
  const meaningsNoun = data?.[0]?.meanings ?? [];
  const titleClass = 'text-3xl font-bold text-secondary list-none pb-6 pt-6';
  const definitionClass = 'text-xl mb-3';
  const synonymsClass = 'text-lg text-bold text-accent';
  const wrapper = 'flex flex-col gap-3 justify-space-between text-left';
  const synonymClass = 'text-secondary font-bold';

  return (
    <div className={wrapper}>
      {meaningsNoun.length > 0 && (
        <div>
          <li className={titleClass}>{meaningsNoun[0].partOfSpeech}</li>
          {meaningsNoun[0].definitions.slice(0, 3).map((def, index) => (
            <div key={index}>
              <li className={definitionClass}> {def.definition}</li>
            </div>
          ))}
          <h2 className={synonymsClass}>
            <span className={synonymClass}>Synonyms: </span>
            {meaningsNoun[0].synonyms.join(', ')}
          </h2>
        </div>
      )}
    </div>
  );
};

export default NounSection;
