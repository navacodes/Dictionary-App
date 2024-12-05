import React from 'react';
import { useDictionaryApi } from '../Hooks/useDictionaryApi';

const DictionaryContext = React.createContext();

const DictionaryProvider = ({ children }) => {
  const { data, isLoading, error, search, setWord } = useDictionaryApi();

  return (
    <DictionaryContext.Provider value={{ data, isLoading, error, search, setWord }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export { DictionaryProvider, DictionaryContext };
