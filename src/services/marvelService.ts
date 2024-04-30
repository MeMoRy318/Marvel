import { urls } from '../configs';
import { IMarvelCharacterResponse } from '../interfaces/marvel-interface';

import { axiosService } from './axiosService';


const marvelService = {
  characters:{
    getAll:(limit:number = 10)=> axiosService.get<IMarvelCharacterResponse>(urls.characters.getAll,{params:{limit}}),
    getById:(id:string | number)=> axiosService.get<IMarvelCharacterResponse>(urls.characters.getById(id)) 
  },
  comics:{
    getAll:(limit:number = 10)=> axiosService.get<IMarvelCharacterResponse>(urls.comics.getAll,{params:{limit}}),
    getById:(id:string | number)=> axiosService.get<IMarvelCharacterResponse>(urls.comics.getById(id))
  }
};

export {marvelService};