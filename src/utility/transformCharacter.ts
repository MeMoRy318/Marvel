import { IMarvelCharacterResponse } from '../interfaces/сharacter-interface';


const transformCharacter = (data:IMarvelCharacterResponse) => {
  const chars = data.data.results.map(char =>({
    id:char.id,
    name: char.name,
    description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
    thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    homepage: char.urls[0].url,
    wiki: char.urls[1].url,
    comics:char.comics.items
  }));
  
  return chars;
  
};

export {transformCharacter};