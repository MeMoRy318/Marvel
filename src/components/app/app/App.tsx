import { FC, PropsWithChildren,lazy,Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Spinner } from '../../UI';
import {AppHeader} from '../../app';

import './app.scss';


type IProps = PropsWithChildren

const MainPage = lazy(()=> import('../../../pages/mainPage/MainPage'));
const ComicsPage = lazy(()=> import('../../../pages/comicsPage/ComicsPage'));
const SingleComicPage = lazy(()=> import('../../../pages/singleComicPage/SingleComicPage'));




const App:FC<IProps> = () => {

  return (
    <div className='app'>
      <AppHeader/>
      <main>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/comics' element={<ComicsPage/>}/>
            <Route path='/comics/:id' element={<SingleComicPage/>}/>
          </Routes>
        </Suspense>
      </main> 
    </div>
  );
};

export default App;