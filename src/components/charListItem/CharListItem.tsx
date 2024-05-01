import {FC,PropsWithChildren} from 'react';

import { IMarvelCharacterResponse } from '../../interfaces/marvel-interface';
import { transformCharacter } from '../../utility';


interface IProps extends PropsWithChildren{
data:IMarvelCharacterResponse
}


const CharListItem:FC<IProps> = ({data}) => {
  
  const chars = transformCharacter(data);
  
  const elements = chars.map(char => (
    <li className="char__item" key={char.id}>
      <img src={char.thumbnail} alt={char.name}/>
      <div className="char__name">{char.name}</div>
    </li>
  ));

  return (
    <ul className="char__grid">
      {elements}
    </ul>
  );
};

export default CharListItem;