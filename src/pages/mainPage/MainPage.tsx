import {useState} from 'react';

import { CharInfo, CharList, RandomChar } from '../../components/chars';
import { ErrorBoundary } from '../../components/errorBoundary';
import { ITrasformChar } from '../../interfaces';
import decoration from '../../resources/img/vision.png';


const MainPage = () => {
  const [char, setChar] = useState<ITrasformChar | null>(null);

  return (
    <>
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
    </>
  );
};

export {MainPage};