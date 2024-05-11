import { FC, PropsWithChildren } from 'react';

import { IMarvelCharacterResponse } from '../../../interfaces';
import { transformCharacter } from '../../../utility';


interface IProps extends PropsWithChildren {
    char:IMarvelCharacterResponse
}


const Char:FC<IProps> = ({char}) => {
  const {description,homepage,name,thumbnail,wiki} = transformCharacter(char)[0];

  const isNotFoundImg = thumbnail.includes('image_not_available.jpg');
  const style = isNotFoundImg ? 'unset' : 'cover';
  
  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt="Random character" className="randomchar__img" style={{objectFit:style}}/>
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

export {Char};