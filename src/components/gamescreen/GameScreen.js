import React from 'react'
import s from "./gamescreen.module.scss";

const GameScreen = ({verifyLetter, randomPick}) => {
    let {pickedCategory, pickedWord} = randomPick;
    return (
    <div className={s.divBody}>
        <div className={s.points}><span>Pontuação = {0}</span></div>

        <h1 className={s.h1}>Adivinhe a palavra:</h1>
        <h3 className={s.h3}>Dica: <span>{pickedCategory}</span></h3>

        <div className={s.wordContainer}>
            <span className={s.letter}>A</span>
            <span className={s.blankSquare}>B</span>
        </div>

        <div className={s.letterContainer}>
            <p>Tente adivinhar uma letra:</p>
            <form >
                <input type="text" name='letter' maxLength="1" required/>
                <button>Adivinhar</button>
            </form>
        </div>

        <div className={s.wrongLetterContainer}>
            <p>Letra erradas:</p>
            <span>a, b, c, d</span>
        </div>
        <div>
        <button onClick={s.verifyLetter}>Terminar Jogo</button>
        </div>
    </div>
  )
}

export default GameScreen