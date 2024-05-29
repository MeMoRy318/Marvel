import React, { FC, PropsWithChildren, useState } from 'react';

import { EStatus, useFetching } from '../../../customHook';
import { IMarvelCharacterResponse, ITrasformChar } from '../../../interfaces';
import { marvelService } from '../../../services';
import { renderContent } from '../../../utility';
import {CharListItem} from '../charListItem/CharListItem';

import './charList.scss';


interface IProps extends PropsWithChildren {
  setChar: React.Dispatch<React.SetStateAction<ITrasformChar | null>>;
}


const CharList: FC<IProps> = ({ setChar }) => {
  const [offset, setOffset] = useState<number>(0);
  const { data,status } = useFetching<IMarvelCharacterResponse>(
    () => marvelService.characters.getAll(offset),
    offset
  );


  const onClick = () => {
    setOffset(prevOffset => prevOffset + 9);
  };

  const btnText = status === EStatus.LOADING ? '...Loading' : 'Load more';
  const disabled = !!(data && data.data.total < offset) || status === EStatus.LOADING;

  return (
    <div className="char__list">
      {renderContent({status,data,Component:CharListItem,componentProps:{setChar},spinner:!data})}
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

export {CharList};
