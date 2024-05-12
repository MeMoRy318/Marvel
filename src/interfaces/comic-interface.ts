// interface IMarvelComic {
//     code: number;
//     status: string;
//     copyright: string;
//     attributionText: string;
//     attributionHTML: string;
//     etag: string;
//     data: IMarvelComicData;
//   }
  
  interface IMarvelComicData {
    data:{
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: IMarvelComicResult[];
    }
  }
  
  interface IMarvelComicResult {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: any[]; 
    resourceURI: string;
    urls: IMarvelComicUrl[];
    series: IMarvelComicSeries;
    variants: IMarvelComicVariant[];
    collections: any[]; 
    collectedIssues: any[]; 
    dates: IMarvelComicDate[];
    prices: IMarvelComicPrice[];
    thumbnail: IMarvelComicThumbnail;
    images: any[]; 
    creators: IMarvelComicCreator;
    characters: IMarvelComicCharacter;
    stories: IMarvelComicStory;
    events: IMarvelComicEvent;
  }
  
  interface IMarvelComicUrl {
    type: string;
    url: string;
  }
  
  interface IMarvelComicSeries {
    resourceURI: string;
    name: string;
  }
  
  interface IMarvelComicVariant {
    resourceURI: string;
    name: string;
  }
  
  interface IMarvelComicDate {
    type: string;
    date: string;
  }
  
  interface IMarvelComicPrice {
    type: string;
    price: number;
  }
  
  interface IMarvelComicThumbnail {
    path: string;
    extension: string;
  }
  
  interface IMarvelComicCreator {
    available: number;
    collectionURI: string;
    items: IMarvelComicCreatorItem[];
    returned: number;
  }
  
  interface IMarvelComicCreatorItem {
    resourceURI: string;
    name: string;
    role: string;
  }
  
  interface IMarvelComicCharacter {
    available: number;
    collectionURI: string;
    items: any[]; 
    returned: number;
  }
  
  interface IMarvelComicStory {
    available: number;
    collectionURI: string;
    items: IMarvelComicStoryItem[];
    returned: number;
  }
  
  interface IMarvelComicStoryItem {
    resourceURI: string;
    name: string;
    type: string;
  }
  
  interface IMarvelComicEvent {
    available: number;
    collectionURI: string;
    items: any[]; 
    returned: number;
  }
  
export type {IMarvelComicData,IMarvelComicResult};