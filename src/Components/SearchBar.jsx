import { useContext, useState } from 'react';
import { DictionaryContext } from '../Context/DictionaryProvider';

const FormInput = ({ placeholder, className, value, onChange }) => (
	<input
		type='text'
		placeholder={placeholder}
		className={className}
		value={value}
		onChange={onChange}
	/>
);

const FormButton = ({ type, className, children, onClick }) => (
	<button type={type} className={className} onClick={onClick}>
		{children}
	</button>
);

const SearchBar = () => {
	const { setWord, search, error } = useContext(DictionaryContext);
	const [localWord, setLocalWord] = useState('');

	const inputClass = 'border-2 p-2 rounded-md w-full text-lg ';
	const buttonClass = 'btn rounded-tl-lg rounded-bl-lg btn-accent ';
	const wrapper = 'rounded-lg mt-5 ml-0 pl-0';

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (localWord) {
			const success = await search(localWord);
			if (success) {
				setWord(localWord);
				setLocalWord('');
			} else {
				setLocalWord('');
				setWord('');
			}
			// console.log('success', success);
		}
	};
	return (
		<div className={wrapper}>
			<form onSubmit={handleSubmit} className='flex justify-center items-center space-x-2'>
				<FormInput
					placeholder='Search Word'
					className={inputClass}
					value={localWord}
					onChange={(e) => setLocalWord(e.target.value)}
				/>
				<FormButton type='submit' className={buttonClass}>
					Search
				</FormButton>
			</form>
			{error && <p className='text-center text-error text-sm mt-2'>{error}</p>}
		</div>
	);
};

export default SearchBar;
