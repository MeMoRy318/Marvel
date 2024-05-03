import {FC,PropsWithChildren} from 'react';

import { ITrasformChar } from '../../interfaces/marvel-interface';


interface IProps extends PropsWithChildren{
  char: ITrasformChar
}


const CharInfoItem:FC<IProps> = ({char:{thumbnail,name,description,homepage,wiki}}) => {
  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt="abyss"/>
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">
        {description}
      </div>
    </>
  );
};

export default CharInfoItem;