import {FC,PropsWithChildren} from 'react';

import { ITrasformChar } from '../../../interfaces';
import { Skeleton } from '../../UI';
import {CharInfoItem, CharSearchForm} from '../../chars';
import {Comics} from '../../comics';

import './charInfo.scss';


interface IProps extends PropsWithChildren{
  char: ITrasformChar | null
}


const CharInfo:FC<IProps> = ({char}) => {


  const content = char ? <><CharInfoItem char={char}/><Comics comics={char.comics}/></> : <Skeleton/>;

  return (
    <div>
      <div className="char__info">
        {content}
      </div>
      <CharSearchForm/>
    </div>
  );
};

export {CharInfo};