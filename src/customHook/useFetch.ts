// eslint-disable-next-line
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';


type IRes<T> = Promise<AxiosResponse<T>>
type ICallback<T> = () => IRes<T>;


interface IFetching<T> {
    data: T | null
    error: string
    isLoading: boolean
}

function useFetching<T>(callback: ICallback<T>, ...args:unknown[]): IFetching<T> {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    callback()
      .then(({ data }) => setData(data))
      .catch((e: Error) => {
        setIsLoading(false);
        setError(e.message);
      })
      .finally(() => setIsLoading(false));
  }, [...args]);

  return { data, error, isLoading };
}

export { useFetching };