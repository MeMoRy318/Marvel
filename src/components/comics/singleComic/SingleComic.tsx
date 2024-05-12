import {FC,PropsWithChildren} from 'react';
import { Link } from 'react-router-dom';
 
import './singleComic.scss';
import { IMarvelComicData } from '../../../interfaces';
import { transformComic } from '../../../utility';


interface IProps extends PropsWithChildren{
data:IMarvelComicData
}

const SingleComic:FC<IProps> = ({data}) => {
  const {description,name,price,thumbnail,pageCount,language} = transformComic(data)[0];

  return (
    <div className="single-comic">
      <img src={thumbnail} alt={name} className="single-comic__img"/>
      <div className="single-comic__info">
        <h2 className="single-comic__name">{name}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to="/comics" className="single-comic__back">Back to all</Link>
    </div>
  );
};

export {SingleComic};