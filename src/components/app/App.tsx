import { FC, PropsWithChildren, useState } from 'react';

import { ITrasformChar } from '../../interfaces/marvel-interface';
import decoration from '../../resources/img/vision.png';
import AppHeader from '../appHeader/AppHeader';
import CharInfo from '../charInfo/CharInfo';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../сharList/CharList';

import './app.scss';


type IProps = PropsWithChildren


const App:FC<IProps> = () => {

  
  const [char, setChar] = useState<ITrasformChar | null>(null);


  return (
    <div className='app'>
      <AppHeader/>
      <main>
        <RandomChar/>
        <div className="char__content">
          <CharList setChar={setChar}/>
          <CharInfo char={char}/>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
      </main>     
    </div>
  );
};

export default App;