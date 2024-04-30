import {FC,PropsWithChildren} from 'react';

import { useFetching } from '../../customHook';
import { IMarvelCharacterResponse } from '../../interfaces/marvel-interface';
import mjolnir from '../../resources/img/mjolnir.png';
import { marvelService } from '../../services';
import { getRandomId } from '../../utility';
import Char from '../char/Char';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spiner/Spiner';


import './randomChar.scss';


type IProps = PropsWithChildren


const RandomChar:FC<IProps> = () => {
  const characterId = getRandomId(1011000, 1011400);
  const {data,error,isLoading} = useFetching<IMarvelCharacterResponse>(()=> marvelService.characters.getById(characterId),null);


  const getStatus = () => {
    if (isLoading) return <Spinner />;
    if (error) return <ErrorMessage />;
    if (data) return <Char char={data} />;
    return null;
  };

  const status = getStatus();
  
  
  return (
    <div className="randomchar">
      {status}
      <div className="randomchar__static">
        <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
        </p>
        <p className="randomchar__title">
                    Or choose another one
        </p>
        <button className="button button__main">
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
      </div>
    </div>
  );
};

export default RandomChar;