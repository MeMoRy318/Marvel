import { PropsWithChildren, FC, FormEvent, useState } from 'react';

import { IMarvelCharacterResponse } from '../../../interfaces';
import { marvelService } from '../../../services';
import { validateInput } from '../../../utility';
import { CharMessage, SearchInput } from '../index';

import './charSearchForm.scss';


type IProps = PropsWithChildren;

const CharSearchForm: FC<IProps> = () => {
  const [inputError, setInputError] = useState<boolean>(false);
  const [char, setChar] = useState<IMarvelCharacterResponse | null>(null);
  const [error, setError] = useState<string | null>(null);


  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { charName } = Object.fromEntries(new FormData(e.currentTarget));
    e.currentTarget.reset();

    if (typeof charName !== 'string' || !validateInput(charName)) {
      setInputError(true);
      return;
    }

    setInputError(false);
    setError(null);

    try {
      const { data: response } = await marvelService.characters.getByName(charName);
      setChar(response);
    } catch {
      setError('The character was not found. Check the name and try again');
    }
  };


  const responseMessage = error || char ? <CharMessage char={char} error={error}/> : null;
  
  return (
    <div className="char__search-form">
      <form onSubmit={onSubmit}>
        <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
        <div className="char__search-wrapper">
          <SearchInput inputError={inputError} setInputError={setInputError}/>
          <button 
            type="submit" 
            disabled={inputError}
            className="button button__main"
          >
            <div className="inner">find</div>
          </button>
        </div>
        { responseMessage }
      </form>
    </div>
  );
};

export { CharSearchForm };
