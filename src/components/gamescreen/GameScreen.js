import React from 'react'

const GameScreen = ({verifyLetter, randomPick}) => {
    let {pickedCategory, pickedWord} = randomPick;
    return (
    <div>GameScreen
        <h1>{pickedCategory}</h1>
        <h3>{pickedWord}</h3>
        <button onClick={verifyLetter}>Terminar Jogo</button>
    </div>
  )
}

export default GameScreen