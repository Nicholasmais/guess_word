import React, {useContext, useEffect} from 'react';
import { ScoreContext } from '../../Contexts/ScoreContext';
import s from "./EndScreen.module.scss";

const EndScreen = ({retry, win, word}) => {
  const {pontos, setPontos} = useContext(ScoreContext);

  useEffect( () =>{
  if (win === null){
    setPontos(0);}}
    , []);

  return (
    <div className={s.mainDiv}>
        <div>{win !== null ? win === 1 ? <div style={{color:'green'}}>Ganhou! </div>:<div style={{color:'red'}}>Perdeu! </div> : "Saiu do jogo"}</div>
        <span>Palavra = {word}</span>
        <button onClick={retry}>Tentar novamente</button>
    </div>
  )
}

export default EndScreen