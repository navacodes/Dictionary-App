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

const SearchBar = ({ word, setWord, search }) => {
	const inputClass = 'border-2 border-gray-300 p-2 rounded-lg w-1/2 text-lg';
	const buttonClass =
		'btn btn-primary bg-purple-500 rounded-full py-2 px-4 hover:bg-purple-700 text-white';

	const handleSubmit = (e) => {
		e.preventDefault();
		if (word) {
			search(word);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='flex justify-center items-center space-x-2'>
				<FormInput
					placeholder='Search Word'
					className={inputClass}
					value={word}
					onChange={(e) => setWord(e.target.value)}
				/>
				<FormButton type='submit' className={buttonClass}>
					Search
				</FormButton>
			</form>
		</div>
	);
};

export default SearchBar;
