interface Thumbnail {
    path: string;
    extension: string;
  }
  
  interface IComic {
    resourceURI: string;
    name: string;
  }
  
  interface Series {
    resourceURI: string;
    name: string;
  }
  
  interface Story {
    resourceURI: string;
    name: string;
    type: string;
  }
  
  interface Event {
    resourceURI: string;
    name: string;
  }
  
  interface Url {
    type: string;
    url: string;
  }
  
  interface IMarvelCharacterData {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: {
      available: number;
      collectionURI: string;
      items: IComic[];
      returned: number;
    };
    series: {
      available: number;
      collectionURI: string;
      items: Series[];
      returned: number;
    };
    stories: {
      available: number;
      collectionURI: string;
      items: Story[];
      returned: number;
    };
    events: {
      available: number;
      collectionURI: string;
      items: Event[];
      returned: number;
    };
    urls: Url[];
  }
  
  interface IMarvelCharacterResponse {
    data: {
      offset: number;
      limit: number;
      total: number;
      count: number;
      results: IMarvelCharacterData[];
    };
  }
  
 interface ITrasformChar {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    homepage: string;
    wiki: string;
    comics: IComic[];
}

export type { IMarvelCharacterData, IMarvelCharacterResponse,ITrasformChar,IComic };