import React from 'react';

import { AppBanner } from '../../components/app';
import { ComicsList } from '../../components/comics';


const ComicsPage = () => {
  return (
    <>
      <AppBanner/>
      <ComicsList/>   
    </>
  );
};

export {ComicsPage};