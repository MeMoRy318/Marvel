import {FC,PropsWithChildren,useRef} from 'react';

import { validateInput } from '../../../utility';


interface IProps extends PropsWithChildren {
  setInputError: React.Dispatch<React.SetStateAction<boolean>>
  inputError:boolean
}

const SearchInput:FC<IProps> = ({setInputError,inputError}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const onChange = () => {
    const value = inputRef.current?.value || '';
    setInputError(!validateInput(value));
  };
  
  return (
    <input 
      ref={inputRef}
      id="charName" 
      name="charName" 
      type="text"
      required 
      placeholder="Enter name"
      onChange={onChange}
      style={{outline: inputError ? '1px solid red' : ''}}
    />
  );
};

export {SearchInput};