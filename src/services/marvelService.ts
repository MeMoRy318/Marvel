import { urls } from '../configs';

import { axiosService } from './axiosService';


const marvelService = {
  characters:{
    getAll:(limit:number = 10)=> axiosService.get(urls.characters.getAll,{params:{limit}}),
    getById:(id:string | number)=> axiosService.get(urls.characters.getById(id)) 
  },
  comics:{
    getAll:(limit:number = 10)=> axiosService.get(urls.comics.getAll,{params:{limit}}),
    getById:(id:string | number)=> axiosService.get(urls.comics.getById(id))
  }
};

export {marvelService};