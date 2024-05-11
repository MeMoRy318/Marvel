import React, { FC, PropsWithChildren, useMemo } from 'react';

import { useFetching } from '../../../customHook';
import { IMarvelCharacterResponse } from '../../../interfaces';
import { marvelService } from '../../../services';
import { getRandomId } from '../../../utility';
import {ErrorMessage,Spinner} from '../../UI';
import {Char,RandomCharStatic} from '../../chars';

import './randomChar.scss';


const RandomChar: FC<PropsWithChildren> = () => {
  const characterId = getRandomId(1011000, 1011400);
  const { data, error, isLoading, setReload } = useFetching<IMarvelCharacterResponse>(
    () => marvelService.characters.getById(characterId),
    false
  );

  const renderContent = useMemo(() => {
    if (isLoading) return <Spinner />;
    if (error) return <ErrorMessage />;
    if (data) return <Char char={data} />;
    return null;
  }, [data, error, isLoading]);

  return (
    <div className="randomchar">
      {renderContent}
      <RandomCharStatic setReload={setReload} />
    </div>
  );
};

export {RandomChar};
