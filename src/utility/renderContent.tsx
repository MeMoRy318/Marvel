import React, { FC } from 'react';

import { Spinner, ErrorMessage } from '../components/UI';
import { EStatus } from '../customHook';


interface RenderContentProps<T, P> {
  status: EStatus;
  data: T | null;
  Component: FC<P>;
  componentProps?: Omit<P, 'data'>; 
  spinner?:boolean
}

function renderContent<T, P extends { data: T }>
({ 
  status,
  data,
  Component,
  componentProps,
  spinner = true
}: RenderContentProps<T, P>) {
  switch (status) {
  case EStatus.LOADING:
    return spinner ? <Spinner /> : data ? <Component {...componentProps as P} data={data} /> : null;
  case EStatus.ERROR:
    return <ErrorMessage />;
  case EStatus.SACCESS:
    return data ? <Component {...componentProps as P} data={data} /> : null;
  default:
    return null;
  }
}

export { renderContent };
