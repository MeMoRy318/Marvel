import {FC,PropsWithChildren} from 'react';

import { useFetching } from '../../customHook';
import { IMarvelCharacterResponse } from '../../interfaces/marvel-interface';
import { marvelService } from '../../services';
import { getRandomId } from '../../utility';
import Char from '../char/Char';
import ErrorMessage from '../errorMessage/ErrorMessage';
import RandomCharStatic from '../randomCharStatic/RandomCharStatic';
import Spinner from '../spiner/Spiner';


import './randomChar.scss';


type IProps = PropsWithChildren


const RandomChar:FC<IProps> = () => {
  const characterId = getRandomId(1011000, 1011400);
  const trigger = false;
  const {data,error,isLoading,setTrigger} = useFetching<IMarvelCharacterResponse>(()=> marvelService.characters.getById(characterId),false,trigger);


  const renderContent = () => {
    if (isLoading) return <Spinner />;
    if (error) return <ErrorMessage />;
    if (data) return <Char char={data} />;
    return null;
  };

  
  return (
    <div className="randomchar">
      {renderContent()}
      <RandomCharStatic setTrigger={setTrigger}/>
    </div>
  );
};

export default RandomChar;