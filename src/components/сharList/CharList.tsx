import {FC,PropsWithChildren} from 'react';

import { useFetching } from '../../customHook';
import { IMarvelCharacterResponse } from '../../interfaces/marvel-interface';
import { marvelService } from '../../services';
import CharListItem from '../charListItem/CharListItem';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spiner/Spiner';

import './charList.scss';



type IProps = PropsWithChildren


const CharList:FC<IProps> = () => {


  const {data,error,isLoading} = useFetching<IMarvelCharacterResponse>(marvelService.characters.getAll,null);


  const getStatus = () => {
    if (isLoading) return <Spinner/>;
    if (error) return <ErrorMessage />;
    if (data) return <CharListItem data={data} />;
    return null;
  };

  const status = getStatus();


  return (
    <div className="char__list">
      {status}
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;