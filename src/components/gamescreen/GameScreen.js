import React, { useState } from 'react'
import s from "./gamescreen.module.scss";

const GameScreen = ({verifyLetter, randomPick}) => {
    let {pickedCategory, pickedWord} = randomPick;
    const [wrongWord, setWrongWord] = useState([]);
    const [wrongWordPrint, setWrongWordPrint] = useState([]);

    const [wordDisplay, setWordDisplay] = useState(Array(pickedWord.length).fill("_"));
    const [showWord, setShowWord] = useState(Array(pickedWord.length).fill("_"));

    const [tries, setTries] = useState(7);
    const [triesPrint, setTriesPrint] = useState(7);

    const handleChange = (e) => {
        e.preventDefault();
        let refreshDisplay = showWord.map((value) => value);
        console.log(pickedWord);
        console.log(wordDisplay);
        console.log(showWord);

        if (pickedWord.includes(e.target.value)){
            for (let index = 0; index < pickedWord.length; index++){
                if (pickedWord[index]===e.target.value){
                    refreshDisplay.forEach((item, i) => {if (i===index){refreshDisplay[i] = e.target.value}})
                    setWordDisplay(refreshDisplay);
                }
            }
        }
        else{
            setWrongWord(prevletters => [...prevletters,e.target.value]);
            setTries(prevState => prevState -= 1);
        }

        if (tries === 0){
            verifyLetter();
        }
        setShowWord(wordDisplay);
        if (wordDisplay.join("") === pickedWord){
            verifyLetter();
        }
        setTriesPrint(tries);
        setWrongWordPrint(wrongWord);
    }


    return (
    <div className={s.divBody}>
        <div className={s.points}><span>Pontuação = {0}</span></div>

        <h1 className={s.h1}>Adivinhe a palavra:</h1>
        <h3 className={s.h3}>Dica: <span>{pickedCategory}</span></h3>

        <div className={s.wordContainer}>
                {showWord.map((palavra,index) => {return <span key={index} className={s.letter}>{palavra}</span>})}
        </div>

        <div className={s.letterContainer}>
            <p>Tente adivinhar uma letra:<span>({triesPrint} tentativas)</span></p>
            <span>
                <form onSubmit={handleChange}>
                    <input type="text" name='letter' onChange={(e)=>setWordDisplay(Array(pickedWord.length).fill("_"))} maxLength="1" required/>
                    <button type='submit'>Adivinhar</button>
                </form>
            </span>
        </div>

        <div className={s.wrongLetterContainer}>
            <p>Letra erradas:</p>
            <span>{wrongWordPrint}</span>
        </div>
        <div>
        <button onClick={verifyLetter}>Terminar Jogo</button>
        </div>
    </div>
  )
}

export default GameScreen