import React, { useContext, useState } from 'react'
import s from "./gamescreen.module.scss";
import { ScoreContext } from '../../Contexts/ScoreContext'

const GameScreen = ({end, randomPick}) => {
    let {pickedCategory, pickedWord} = randomPick;
    const [guessLetter, setGuessLetter] = useState("");
    const [wrongWord, setWrongWord] = useState([]);

    const [wordDisplay, setWordDisplay] = useState(Array(pickedWord.length).fill("_"));

    const [tries, setTries] = useState(7);
    const [triesPrint, setTriesPrint] = useState(7);

    const {pontos, setPontos} = useContext(ScoreContext);

    const terminar = () => {
        end(null);
    }

    const handleChange = (e) => {
        e.preventDefault();
        let refreshDisplay = wordDisplay.map((value) => value);

        if (pickedWord.includes(guessLetter)){
            for (let index = 0; index < pickedWord.length; index++){
                if (pickedWord[index]===guessLetter){
                    refreshDisplay.forEach((item, i) => {if (i===index){refreshDisplay[i] = guessLetter}})
                    setWordDisplay(refreshDisplay);
                }
            }
        }
        
        else{
            setWrongWord(prevState => [...prevState,guessLetter]);
            setTries(prevState => prevState -= 1);
        }

        if (tries === 0){
            end(0);
        }
        if (refreshDisplay.join("") === pickedWord){
            setPontos(lastScore => lastScore += 1);
            end(1);
        }
        setTriesPrint(tries);

    }


    return (
    <div className={s.divBody}>
        <div className={s.points}><span>Pontuação = {pontos}</span></div>

        <h1 className={s.h1}>Adivinhe a palavra:</h1>
        <h3 className={s.h3}>Dica: <span>{pickedCategory}</span></h3>

        <div className={s.wordContainer}>
                {wordDisplay.map((palavra,index) => {return <span key={index} className={s.letter}>{palavra}</span>})}
        </div>

        <div className={s.letterContainer}>
            <p>Tente adivinhar uma letra:<span>({triesPrint} tentativas)</span></p>
            <span>
                <form onSubmit={handleChange}>
                    <input type="text" name='letter' onChange={(e)=>{setGuessLetter(e.target.value);}} maxLength="1" required/>
                    <button type='submit'>Adivinhar</button>
                </form>
            </span>
        </div>

        <div className={s.wrongLetterContainer}>
            <p>Letra erradas:</p>
            {wrongWord.map((letter, i) => <span key={i}>{letter}</span>)}
        </div>
        <div>
        <button onClick={terminar}>Terminar Jogo</button>
        </div>
    </div>
  )
}

export default GameScreen