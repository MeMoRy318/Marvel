import { urls } from '../configs';
import { IMarvelComicData,IMarvelCharacterResponse } from '../interfaces';

import { axiosService } from './axiosService';


const marvelService = {
  characters:{
    getAll:(offset:number,limit:number = 9)=> axiosService.get<IMarvelCharacterResponse>(urls.characters.getAll,{params:{limit,offset}}),
    getById:(id:string | number)=> axiosService.get<IMarvelCharacterResponse>(urls.characters.getById(id)) 
  },
  comics:{
    getAll:(offset:number,limit:number = 8)=> axiosService.get<IMarvelComicData>(urls.comics.getAll,{params:{limit,offset}}),
    getById:(id:string | number)=> axiosService.get<IMarvelComicData>(urls.comics.getById(id))
  }
};

export {marvelService};