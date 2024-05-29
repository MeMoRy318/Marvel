// eslint-disable-next-line
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';


type IRes<T> = Promise<AxiosResponse<T>>
type ICallback<T> = () => IRes<T>;

export enum EStatus {
  PENDING = 'pending',
  LOADING = 'loading',
  ERROR = 'error',
  SACCESS = 'saccess'
}

interface IFetching<T> {
    data: T | null
    setReload: React.Dispatch<React.SetStateAction<boolean>>
    status:EStatus
}



function useFetching<T>(callback: ICallback<T>, ...args:unknown[]): IFetching<T> {
  const [data, setData] = useState<T | null>(null);
  const [reload,setReload] = useState<boolean>(false);
  const [status,setStatus] = useState<EStatus>(EStatus.PENDING);

  useEffect(() => {
    setStatus(EStatus.LOADING);
    callback()
      .then(({ data:response }) => {
        setData(response);
        setStatus(EStatus.SACCESS);
      })
      .catch(() => {
        setStatus(EStatus.ERROR);
      });
  }, [...args,reload]);

  return { data, setReload,status };
}

export { useFetching };
