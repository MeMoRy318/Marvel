import { IMarvelComicData } from '../interfaces';


const transformComic = (data:IMarvelComicData) => {
  const comics = data.data.results.map(comic =>({
    id:comic.id,
    name: comic.title,
    description: comic.description ? `${comic.description.slice(0, 210)}...` : 'There is no description for this character',
    thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
    language: comic.textObjects[0]?.language || 'en-us',
    price: comic.prices[0].price
      ? `${comic.prices[0].price}$`
      : 'not available',
    pageCount: comic.pageCount
      ? `${comic.pageCount} p.`
      : 'No information about the number of pages',
  }));
  return comics;
    
};

export {transformComic};