import React from 'react'
import { ScoreContext } from '../../Contexts/ScoreContext'

const EndScreen = ({retry, win}) => {
  
  return (
    <div>EndScreen
        <div>{win !== null ? win === 1 ? <div style={{color:'green'}}>Ganhou</div>:<div style={{color:'red'}}>Perdeu</div> : "Saiu do jogo"}</div>
        <button onClick={retry}>Tentar novamente</button>
    </div>
  )
}

export default EndScreen