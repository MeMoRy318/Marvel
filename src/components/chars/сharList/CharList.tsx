import React, { FC, PropsWithChildren, useState, useMemo } from 'react';

import { useFetching } from '../../../customHook';
import { IMarvelCharacterResponse, ITrasformChar } from '../../../interfaces';
import { marvelService } from '../../../services';
import {ErrorMessage,Spinner} from '../../UI';
import {CharListItem} from '../charListItem/CharListItem';

import './charList.scss';


interface IProps extends PropsWithChildren {
  setChar: React.Dispatch<React.SetStateAction<ITrasformChar | null>>;
}


const CharList: FC<IProps> = ({ setChar }) => {
  const [offset, setOffset] = useState<number>(0);
  const { data, error, isLoading } = useFetching<IMarvelCharacterResponse>(
    () => marvelService.characters.getAll(offset),
    offset
  );

  const renderContent = useMemo(() => {
    if (isLoading && !data) return <Spinner />;
    if (error) return <ErrorMessage />;
    if (data) return <CharListItem data={data} setChar={setChar} />;
    return null;
  }, [data, error, isLoading, setChar]);

  const onClick = () => {
    setOffset(prevOffset => prevOffset + 9);
  };

  const btnText = isLoading ? '...Loading' : 'Load more';
  const disabled = !!(data && data.data.total < offset) || isLoading;

  return (
    <div className="char__list">
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

export {CharList};
