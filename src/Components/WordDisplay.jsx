import { useContext, useState } from 'react';
import { DictionaryContext } from '../Context/DictionaryProvider';
import IconPlayButton from '../assets/images/icon-play.svg';

const WordDisplay = () => {
	const { data } = useContext(DictionaryContext);
	const [isPlaying, setIsPlaying] = useState(false);

	const word = data && data[0] ? data[0].word : '';
	const phonetic =
		data && data[0] && data[0].phonetics && data[0].phonetics.find((p) => p.text)
			? data[0].phonetics.find((p) => p.text).text
			: '';
	const phoneticAudio =
		data && data[0] && data[0].phonetics && data[0].phonetics.find((p) => p.audio)
			? data[0].phonetics.find((p) => p.audio).audio
			: '';

	const handlePlay = () => {
		const audio = new Audio(phoneticAudio);
		audio.onplaying = () => setIsPlaying(true);
		audio.onended = () => setIsPlaying(false);
		audio.play();
	};

	return (
		<div>
			<h1 className='text-5xl text-slate-800 font-bold text-center'>{word}</h1>
			{phonetic && <p className='text-2xl font-bold text-center text-purple-700'>{phonetic}</p>}
			{phoneticAudio && (
				<div>
					<img
						src={IconPlayButton}
						alt='Play button'
						className={`h-10 w-10 mx-auto cursor-pointer hover:opacity-80 `}
						onClick={handlePlay}
					/>
				</div>
			)}
		</div>
	);
};

export default WordDisplay;
