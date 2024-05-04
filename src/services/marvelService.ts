import { urls } from '../configs';
import { IMarvelCharacterResponse } from '../interfaces/marvel-interface';

import { axiosService } from './axiosService';


const marvelService = {
  characters:{
    getAll:(offset:number,limit:number = 9)=> axiosService.get<IMarvelCharacterResponse>(urls.characters.getAll,{params:{limit,offset}}),
    getById:(id:string | number)=> axiosService.get<IMarvelCharacterResponse>(urls.characters.getById(id)) 
  },
  comics:{
    getAll:(limit:number = 10)=> axiosService.get<IMarvelCharacterResponse>(urls.comics.getAll,{params:{limit}}),
    getById:(id:string | number)=> axiosService.get<IMarvelCharacterResponse>(urls.comics.getById(id))
  }
};

export {marvelService};