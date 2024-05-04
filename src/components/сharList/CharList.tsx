import {FC,PropsWithChildren, useState} from 'react';

import { useFetching } from '../../customHook';
import { IMarvelCharacterResponse,ITrasformChar } from '../../interfaces/marvel-interface';
import { marvelService } from '../../services';
import CharListItem from '../charListItem/CharListItem';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spiner/Spiner';

import './charList.scss';



interface IProps extends PropsWithChildren{
  setChar: React.Dispatch<React.SetStateAction<ITrasformChar | null>>
}


const CharList:FC<IProps> = ({setChar}) => {

  const [offset,setOffset] = useState<number>(0);
  const {data,error,isLoading} = useFetching<IMarvelCharacterResponse>(()=> marvelService.characters.getAll(offset),true,offset);


  const renderContent = () => {
    if (isLoading && !data) return <Spinner/>;
    if (error) return <ErrorMessage />;
    if (data) return <CharListItem data={data} setChar={setChar}/>;
    return null;
  };


  const onClick = () =>{
    setOffset(prev => prev + 9);
  };


  const btnText = isLoading ? '...loading' : 'load more';
  const disabled = !!(data && data.data.total < offset) || isLoading;


  return (
    <div className="char__list">
      {renderContent()}
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

export default CharList;