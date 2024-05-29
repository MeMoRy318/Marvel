import {useState} from 'react';

import { EStatus, useFetching } from '../../../customHook';
import { IMarvelComicData } from '../../../interfaces';
import { marvelService } from '../../../services';
import { renderContent } from '../../../utility';
import { ComicsListItem } from '../comicsListItem/ComicsListItem';

import './comicsList.scss';


const ComicsList = () => {
  const [offset, setOffset] = useState<number>(0);
  const { data,status } = useFetching<IMarvelComicData>(
    () => marvelService.comics.getAll(offset),
    offset
  );

  const onClick = () => {
    setOffset(prevOffset => prevOffset + 9);
  };


  const btnText = status === EStatus.LOADING ? '...Loading' : 'Load more';
  const disabled = !!(data && data.data.total < offset) || status === EStatus.LOADING;


  return (
    <div className="comics__list">
      {renderContent({status,data,Component:ComicsListItem,spinner:!data})}
      <button  
        className="button button__main button__long"
        onClick={onClick}
        disabled={disabled}
      >
        <div className="inner">{btnText}</div>
      </button>  
    </div>
  );
};

export {ComicsList};