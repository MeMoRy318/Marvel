import { FC, PropsWithChildren } from 'react';

import decoration from '../../resources/img/vision.png';
import AppHeader from '../appHeader/AppHeader';
import CharInfo from '../charInfo/CharInfo';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../сharList/CharList';

import './app.scss';


type IProps = PropsWithChildren


const App:FC<IProps> = () => {
  return (
    <div className='app'>
      <AppHeader/>
      <main>
        <RandomChar/>
        <div className="char__content">
          <CharList/>
          <CharInfo/>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
      </main>     
    </div>
  );
};

export default App;