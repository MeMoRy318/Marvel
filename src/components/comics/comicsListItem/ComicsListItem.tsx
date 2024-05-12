import {FC,PropsWithChildren,useMemo,useRef} from 'react';

import { IMarvelComicData } from '../../../interfaces';
import { transformComic } from '../../../utility';


interface IProps extends PropsWithChildren{
  data:IMarvelComicData
}

const ComicsListItem:FC<IProps> = ({data}) => {

  const previousDataRef = useRef<IMarvelComicData | null>(null);

  const comics = useMemo(() => {
    if (previousDataRef.current) {
      const newData = { ...data };
      newData.data.results = [
        ...previousDataRef.current.data.results,
        ...newData.data.results,
      ];
      previousDataRef.current = newData;
      return transformComic(newData);
    } else {
      previousDataRef.current = data;
      return transformComic(data);
    }
  }, [data]);

  const elements = comics.map((comic,index) => {
    const isNotFoundImg = comic.thumbnail.includes('image_not_available.jpg');
    const style = isNotFoundImg ? 'unset' : 'cover';
    return (
      <li 
        tabIndex={0}
        className="comics__item"
        key={comic.id + index}
      >
        <div >
          <img src={comic.thumbnail} alt={comic.name} className="comics__item-img" style={{objectFit:style}}/>
          <div className="comics__item-name">{comic.name}</div>
          <div className="comics__item-price">{comic.price}</div>
        </div>
      </li>
    );
  });

  return ( 
    <ul className="comics__grid">
      {elements}
    </ul>
  );
};

export {ComicsListItem};