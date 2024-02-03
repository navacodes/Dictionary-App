import { useState } from 'react';

export const useDictionaryApi = (initialWord) => {
	const [word, setWord] = useState(initialWord);
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const search = async (word) => {
		setError(null);
		setIsLoading(true);
		const ApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
		try {
			const response = await fetch(ApiUrl);
			if (!response.ok) {
				const errorData = await response.json();
				setError(errorData.message);
				setIsLoading(false);
				return;
			}
			const data = await response.json();
			setData(data);
			setIsLoading(false);
			setError(null);
			return true;
		} catch (error) {
			setError(error.message);
			setIsLoading(false);
			return false;
		}
	};

	return { data, isLoading, error, search, setWord };
};