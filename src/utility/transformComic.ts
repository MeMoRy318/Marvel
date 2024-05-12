import { IMarvelComicData } from '../interfaces';


const transformComic = (data:IMarvelComicData) => {
  const comics = data.data.results.map(comic =>({
    id:comic.id,
    name: comic.title,
    description: comic.description ? `${comic.description.slice(0, 210)}...` : 'There is no description for this character',
    thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
    price:comic.prices[0].price
  }));
    
  return comics;
    
};

export {transformComic};