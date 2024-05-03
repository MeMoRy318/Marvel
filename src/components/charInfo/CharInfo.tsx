import {FC,PropsWithChildren} from 'react';

import { ITrasformChar } from '../../interfaces/marvel-interface';
import CharInfoItem from '../charInfoItem/CharInfoItem';
import Comics from '../comics/Comics';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';


interface IProps extends PropsWithChildren{
  char: ITrasformChar | null
}


const CharInfo:FC<IProps> = ({char}) => {


  const content = char ? <><CharInfoItem char={char}/><Comics comics={char.comics}/></> : <Skeleton/>;

  return (
    <div className="char__info">
      {content}
    </div>
  );
};

export default CharInfo;