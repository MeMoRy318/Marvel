import React, { FC, PropsWithChildren } from 'react';

import {useFetching } from '../../../customHook';
import { IMarvelCharacterResponse } from '../../../interfaces';
import { marvelService } from '../../../services';
import { getRandomId, renderContent } from '../../../utility';
import {Char,RandomCharStatic} from '../../chars';

import './randomChar.scss';


const RandomChar: FC<PropsWithChildren> = () => {
  const characterId = getRandomId(1011000, 1011400);
  const { data, setReload,status } = 
  useFetching<IMarvelCharacterResponse>
  (() => marvelService.characters.getById(characterId),false);

  
  return (
    <div className="randomchar">
      {
        renderContent({status,Component:Char,data})
      }
      <RandomCharStatic setReload={setReload} />
    </div>
  );
};

export {RandomChar};
