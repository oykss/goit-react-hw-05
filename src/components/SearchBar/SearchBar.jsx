import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import css from './SearchBar.module.css';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [inputValue, setInputValue] = useState(query);

  const handleQuery = useDebouncedCallback(value => {
    value ? setSearchParams({ query: value }) : setSearchParams({});
  }, 300);

  return (
    <label className={css.label}>
      Search:
      <input
        type="text"
        value={inputValue}
        className={css.input}
        onChange={e => {
          setInputValue(e.target.value);
          handleQuery(e.target.value);
        }}
      />
    </label>
  );
}
