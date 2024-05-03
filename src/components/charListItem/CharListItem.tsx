import {FC,PropsWithChildren} from 'react';

import { IMarvelCharacterResponse, ITrasformChar } from '../../interfaces/marvel-interface';
import { transformCharacter } from '../../utility';


interface IProps extends PropsWithChildren{
data:IMarvelCharacterResponse
setChar: React.Dispatch<React.SetStateAction<ITrasformChar | null>>
}


const CharListItem:FC<IProps> = ({data,setChar}) => {
  

  const chars = transformCharacter(data);
  

  const elements = chars.map(char => {
    const isNotFoundImg = char.thumbnail.includes('image_not_available.jpg');
    const style = isNotFoundImg ? 'unset' : 'cover';
    return (
      <li 
        className="char__item"
        key={char.id}
        onClick={()=> setChar(char)}
      >
        <img src={char.thumbnail} alt={char.name} style={{objectFit:style}}/>
        <div className="char__name">{char.name}</div>
      </li>
    );
  });


  return (
    <ul className="char__grid">
      {elements}
    </ul>
  );
};

export default CharListItem;