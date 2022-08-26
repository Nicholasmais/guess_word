import React from 'react'
import { ScoreContext } from '../../Contexts/ScoreContext'

const EndScreen = ({retry}) => {
  return (
    <div>EndScreen
        <button onClick={retry}>Tentar novamente</button>
    </div>
  )
}

export default EndScreen