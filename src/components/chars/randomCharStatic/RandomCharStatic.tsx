import {FC,PropsWithChildren} from 'react';

import mjolnir from '../../../resources/img/mjolnir.png';


interface IProps extends PropsWithChildren{
  setReload: (value: React.SetStateAction<boolean>) => void
}


const RandomCharStatic:FC<IProps> = ({setReload}) => {
  return (
    <div className="randomchar__static">
      <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
      </p>
      <p className="randomchar__title">
                    Or choose another one
      </p>
      <button 
        className="button button__main"
        onClick={()=> setReload(prev => !prev)}
      >
        <div className="inner">try it</div>
      </button>
      <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
    </div>
  );
};

export {RandomCharStatic};