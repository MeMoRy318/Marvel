// eslint-disable-next-line
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';


type IRes<T> = Promise<AxiosResponse<T>>
type ICallback<T> = () => IRes<T>;


interface IFetching<T> {
    data: T | null
    error: string
    isLoading: boolean
    setReload: React.Dispatch<React.SetStateAction<boolean>>
}

function useFetching<T>(callback: ICallback<T>, ...args:unknown[]): IFetching<T> {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<T | null>(null);
  const [reload,setReload] = useState<boolean>(false);
  
  useEffect(() => {
    setIsLoading(true);
    setError('');
    callback()
      .then(({ data:response }) => setData(response))
      .catch((e: Error) => {
        setIsLoading(false);
        setError(e.message);
      })
      .finally(() => setIsLoading(false));
  }, [...args,reload]);

  return { data, error, isLoading, setReload };
}

export { useFetching };
