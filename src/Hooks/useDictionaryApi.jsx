import { useState, useEffect } from 'react';

export const useDictionaryApi = (initialWord) => {
	const [word, setWord] = useState(initialWord);
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const search = async (word) => {
		setIsLoading(true);
		const ApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
		try {
			const response = await fetch(ApiUrl);
			const data = await response.json();
			setData(data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		if (word) {
			search(word);
		}
	}, [word]);

	return { data, isLoading, error, search, setWord };
};
