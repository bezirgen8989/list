import React, { useCallback, useState } from 'react';
import Button from "../Button";
import "./index.css";

const SearchInput = ({ onSearch, onResetSearchSettings, onResearchBtnStatus }) => {
  const [value, setValue] = useState('');

  const onSearchChange = useCallback((e) => setValue(e.target.value), []);
  const onSubmit = useCallback(() => {
      onSearch(value)
      setValue('')
  }, [value, onSearch]);

  return (
    <div className="SearchInput">
      <input value={value} onChange={onSearchChange} placeholder={'Search by name'}/>
      <Button onClick={onSubmit}>Submit</Button>
      <span
          className={!onResearchBtnStatus ? 'disableSpan' : null}
      >
          <button onClick={onResetSearchSettings}>Reset search settings</button>
      </span>

    </div>
  );
};

export default SearchInput;
