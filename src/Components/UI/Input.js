import { useState } from 'react';

const Input = (props) => {
  const [value, setValue] = useState('');

  const inputChangeHandler = (e) => {
    setValue(e.target.vlaue);
  };
  return (
    <input
      type={props.type}
      value={value}
      onChange={inputChangeHandler}
      className={props.className}
    />
  );
};

export default Input;
