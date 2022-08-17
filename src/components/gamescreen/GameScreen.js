import React, { useState } from 'react'
import s from "./gamescreen.module.scss";

const GameScreen = ({verifyLetter, randomPick}) => {
    let {pickedCategory, pickedWord} = randomPick;
    const [word, setWords] = useState([]);
    const [wordPrint, setWordPrint] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setWords(oldWords => [...oldWords,e.target.value]);
    }

    const handleGuess = (e) =>{
        e.preventDefault();
        setWordPrint(word);
    }

    return (
    <div className={s.divBody}>
        <div className={s.points}><span>Pontuação = {0}</span></div>

        <h1 className={s.h1}>Adivinhe a palavra:</h1>
        <h3 className={s.h3}>Dica: <span>{pickedCategory}</span></h3>

        <div className={s.wordContainer}>
                {wordPrint.map((palavra,index) => {return <span key={index} className={s.letter}>{palavra}</span>})}
        </div>

        <div className={s.letterContainer}>
            <p>Tente adivinhar uma letra:</p>
                <input type="text" name='letter' onChange={handleChange} maxLength="1" required/>
                <button onClick={handleGuess}>Adivinhar</button>
        </div>

        <div className={s.wrongLetterContainer}>
            <p>Letra erradas:</p>
            <span>a, b, c, d</span>
        </div>
        <div>
        <button onClick={verifyLetter}>Terminar Jogo</button>
        </div>
    </div>
  )
}

export default GameScreen