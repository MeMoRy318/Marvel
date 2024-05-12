import {useState,useMemo} from 'react';

import { useFetching } from '../../../customHook';
import { IMarvelComicData } from '../../../interfaces';
import { marvelService } from '../../../services';
import { ErrorMessage, Spinner } from '../../UI';
import { ComicsListItem } from '../comicsListItem/ComicsListItem';

import './comicsList.scss';


const ComicsList = () => {
  const [offset, setOffset] = useState<number>(0);
  const { data, error, isLoading } = useFetching<IMarvelComicData>(
    () => marvelService.comics.getAll(offset),
    offset
  );

  const onClick = () => {
    setOffset(prevOffset => prevOffset + 9);
  };

  const renderContent = useMemo(() => {
    if (isLoading && !data) return <Spinner />;
    if (error) return <ErrorMessage />;
    if (data) return <ComicsListItem data={data}/>;
    return null;
  }, [data, error, isLoading]);

  const btnText = isLoading ? '...Loading' : 'Load more';
  const disabled = !!(data && data.data.total < offset) || isLoading;


  return (
    <div className="comics__list">
      {renderContent}
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