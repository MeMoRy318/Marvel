// eslint-disable-next-line
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { IMarvelCharacterResponse } from '../interfaces/marvel-interface';


type IRes<T> = Promise<AxiosResponse<T>>
type ICallback<T> = () => IRes<T>;


interface IFetching<T> {
    data: T | null
    error: string
    isLoading: boolean
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

function useFetching<T>(callback: ICallback<T>,loadMore:boolean, ...args:unknown[]): IFetching<T> {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<T | null>(null);
  const [trigger,setTrigger] = useState<boolean>(false);
  
  useEffect(() => {
    setIsLoading(true);
    setError('');
    callback()
      .then(({ data:response }) => {
        if(!loadMore || !data){
          setData(response);
        }else{
          const newData = { ...response } as IMarvelCharacterResponse;
          setData(prev => {
            const prevData = prev as IMarvelCharacterResponse;
            const mergedResults = [...prevData.data.results, ...newData.data.results];
            newData.data.results = mergedResults;
            return newData as T;
          });
        }
      })
      .catch((e: Error) => {
        // setIsLoading(false);
        setError(e.message);
      })
      .finally(() => setIsLoading(false));
  }, [...args,trigger]);

  return { data, error, isLoading, setTrigger };
}

export { useFetching };