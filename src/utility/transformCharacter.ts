import { IMarvelCharacterResponse } from '../interfaces/marvel-interface';


const transformCharacter = (data:IMarvelCharacterResponse) => {
  const char = data.data.results[0];
  return {
    name: char.name,
    description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
    thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    homepage: char.urls[0].url,
    wiki: char.urls[1].url
  };
  
};

export {transformCharacter};