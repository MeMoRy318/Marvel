import { FC, PropsWithChildren } from 'react';

import { IMarvelCharacterResponse } from '../../interfaces/marvel-interface';
import { transformCharacter } from '../../utility';


interface IProps extends PropsWithChildren {
    char:IMarvelCharacterResponse
}


const Char:FC<IProps> = ({char}) => {
    
  const {description,homepage,name,thumbnail,wiki} = transformCharacter(char)[0];

  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt="Random character" className="randomchar__img"/>
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Char;