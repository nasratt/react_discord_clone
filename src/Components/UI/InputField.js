import { useState, forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { label, type, value, id, nolabel, onChange, onFocus, onBlur } = props;
  const [content, setContent] = useState('');

  return (
    <div>
      {!nolabel && (
        <label
          htmlFor="id"
          className="uppercase block text-white-300 justify-self-start text-left text-sm text-greyple mb-1 font-medium"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type || 'text'}
        value={value}
        onChange={onChange}
        className="border border-black bg-grayTwo h-[40px] outline-none focus:border-blurple p-2 rounded-sm min-w-full transition-colors"
      />
    </div>
  );
});

export default Input;
