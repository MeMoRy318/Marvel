import { FC, PropsWithChildren, useState } from 'react';

import { ITrasformChar } from '../../../interfaces';
import decoration from '../../../resources/img/vision.png';
import {AppHeader} from '../../app';
import {CharInfo,RandomChar,CharList} from '../../chars';
import { ErrorBoundary } from '../../errorBoundary';

import './app.scss';


type IProps = PropsWithChildren


const App:FC<IProps> = () => {

  
  const [char, setChar] = useState<ITrasformChar | null>(null);

  return (
    <div className='app'>
      <AppHeader/>
      <main>
        <ErrorBoundary>
          <RandomChar/>
        </ErrorBoundary>
        <div className="char__content">
          <ErrorBoundary>
            <CharList setChar={setChar}/>
          </ErrorBoundary>
          <CharInfo char={char}/>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
      </main>    
    </div>
  );
};

export default App;