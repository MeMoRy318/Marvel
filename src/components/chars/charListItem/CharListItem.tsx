import {FC,PropsWithChildren, useMemo, useRef} from 'react';

import { IMarvelCharacterResponse, ITrasformChar } from '../../../interfaces';
import { transformCharacter } from '../../../utility';


interface IProps extends PropsWithChildren{
data:IMarvelCharacterResponse
setChar: React.Dispatch<React.SetStateAction<ITrasformChar | null>>
}


const CharListItem:FC<IProps> = ({data,setChar}) => {
  const previousDataRef = useRef<IMarvelCharacterResponse | null>(null);

  const chars = useMemo(() => {
    if (previousDataRef.current) {
      const newData = { ...data };
      newData.data.results = [
        ...previousDataRef.current.data.results,
        ...newData.data.results,
      ];
      previousDataRef.current = newData;
      return transformCharacter(newData);
    } else {
      previousDataRef.current = data;
      return transformCharacter(data);
    }
  }, [data]);
  
  const elements = chars.map(char => {
    const isNotFoundImg = char.thumbnail.includes('image_not_available.jpg');
    const style = isNotFoundImg ? 'unset' : 'cover';
    return (
      <li 
        tabIndex={0}
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

export {CharListItem};