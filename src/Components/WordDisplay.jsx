import { useContext, useState } from 'react';
import { DictionaryContext } from '../Context/DictionaryProvider';

const WordDisplay = () => {
	const { data } = useContext(DictionaryContext);
	const [isPlaying, setIsPlaying] = useState(false);

	const word =
		data && data[0] ? data[0].word.charAt(0).toUpperCase() + data[0].word.slice(1).toLowerCase() : '';
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

	const titleClass = 'text-6xl font-bold';
	const phoneticClass = 'text-2xl font-bold text-primary mr-auto ';
	const svgClass = 'h-10 w-10 cursor-pointer hover:opacity-80 sm:h-14 sm:w-14';
	const wrapper =
		'flex flex-col justify-between gap-5 flex-wrap text-left pb-10 pt-10 sm:pt-10 sm:flex-row sm:items-center  sm:pb-0 sm:justify-start';

	return (
		<div className={wrapper}>
			<h1 className={titleClass}>{word}</h1>
			{phonetic && <p className={phoneticClass}>{phonetic}</p>}
			{phoneticAudio && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='75'
					height='75'
					viewBox='0 0 75 75'
					fill='currentColor'
					fillRule='evenodd'
					className={svgClass}
					onClick={handlePlay}
				>
					<circle cx='37.5' cy='37.5' r='37.5' opacity='.25' />
					<path d='M29 27v21l21-10.5z' />
				</svg>
			)}
		</div>
	);
};

export default WordDisplay;
