import { useParams } from 'react-router-dom';

import { AppBanner } from '../../components/app';
import { SingleComic } from '../../components/comics';
import { useFetching } from '../../customHook';
import { IMarvelComicData } from '../../interfaces';
import { marvelService } from '../../services';
import { renderContent } from '../../utility';


const SingleComicPage = () => {
  const {id = '82970'} = useParams<{id:string}>();
  const {data,status} = useFetching<IMarvelComicData>(()=> marvelService.comics.getById(id));
  

  return (
    <>
      <AppBanner/>
      {renderContent({data,status,Component:SingleComic})}
    </>
  );
};

export {SingleComicPage};