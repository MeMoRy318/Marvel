import { FC, PropsWithChildren } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ComicsPage, MainPage } from '../../../pages';
import {AppHeader} from '../../app';

import './app.scss';


type IProps = PropsWithChildren


const App:FC<IProps> = () => {

  return (
    <div className='app'>
      <AppHeader/>
      <main>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='comics' element={<ComicsPage/>}/>
        </Routes>
      </main>    
    </div>
  );
};

export default App;