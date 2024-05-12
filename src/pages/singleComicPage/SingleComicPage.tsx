import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorMessage, Spinner } from '../../components/UI';
import { AppBanner } from '../../components/app';
import { SingleComic } from '../../components/comics';
import { useFetching } from '../../customHook';
import { IMarvelComicData } from '../../interfaces';
import { marvelService } from '../../services';


const SingleComicPage = () => {
  const {id = '82970'} = useParams<{id:string}>();
  const {data,error,isLoading} = useFetching<IMarvelComicData>(()=> marvelService.comics.getById(id));
  
  const renderContent = useMemo(() => {
    if (isLoading) return <Spinner />;
    if (error) return <ErrorMessage />;
    if (data) return <SingleComic data={data}/> ;
    return null;
  }, [data, error, isLoading]);

  return (
    <>
      <AppBanner/>
      {renderContent}
    </>
  );
};

export {SingleComicPage};