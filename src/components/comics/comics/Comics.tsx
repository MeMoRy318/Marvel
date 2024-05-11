import {FC,PropsWithChildren} from 'react';

import { IComic } from '../../../interfaces';


interface IProps extends PropsWithChildren {
comics:IComic[]
}


const Comics:FC<IProps> = ({comics}) => {
  const content = comics.map((value,index) => {
    if(index > 9) return null;
    return (
      <li className="char__comics-item" key={value.name}>{value.name}</li>
    );
  });

  return (
    <>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {!!comics.length ? content : 'There is no comics with this character'}
      </ul>
    </>
  );
};

export {Comics};