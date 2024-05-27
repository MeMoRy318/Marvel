import { FC,PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { IMarvelCharacterResponse } from '../../../interfaces';


interface IProps extends PropsWithChildren {
    char?:IMarvelCharacterResponse | null
    error?:string | null
}

const CharMessage:FC<IProps> = ({char,error}) => {

  const renderCharMessage = () => {
    if (error || char?.data.results.length === 0) return ( 
      <div className="char__search-error">
    The character was not found. Check the name and try again
      </div>
    );
    
    if (char) {
      const character = char.data.results[0];
      return (
        <div className="char__search-wrapper">
          <div className="char__search-success">There is! Visit {character.name} page?</div>
          <Link to={`/characters/${character.id}`} className="button button__secondary">
            <div className="inner">To page</div>
          </Link>
        </div>
      );
    }

    return null;
  };

  const renderMessage = renderCharMessage();

  
  return (renderMessage);
};

export {CharMessage};