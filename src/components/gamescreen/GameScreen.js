import React, { useContext, useEffect, useState } from 'react'
import s from "./gamescreen.module.scss";
import { ScoreContext } from '../../Contexts/ScoreContext'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GameScreen = ({end, randomPick}) => {
    let {pickedCategory, pickedWord} = randomPick;
    const [guessLetter, setGuessLetter] = useState("");
    const [wrongWord, setWrongWord] = useState([""]);

    const [wordDisplay, setWordDisplay] = useState(Array(pickedWord.length).fill(""));

    const [tries, setTries] = useState(7);

    const {pontos, setPontos} = useContext(ScoreContext);

    useEffect(() => {
        if (tries === 0){
            end(0);
        }
    }, [tries]);

    const terminar = () => {
        end(null);
    }

    const removeAcento = (p) => {
        return p.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    const handleChange = (e) => {
        e.preventDefault();
 
        let refreshDisplay = wordDisplay.map((value) => value);

        if (!wrongWord.includes(guessLetter) && !refreshDisplay.includes(removeAcento(guessLetter))){
            if (pickedWord.split("").map(p => removeAcento(p)).includes(guessLetter)){
                for (let index = 0; index < pickedWord.length; index++){
                    if (removeAcento(pickedWord[index])===removeAcento(guessLetter)){
                        refreshDisplay.forEach((item, i) => {if (i===index){refreshDisplay[i] = pickedWord[index]}})
                        setWordDisplay(refreshDisplay);
                    }
                }
            }
            else{
                setWrongWord(prevState => [...prevState,guessLetter]);
                setTries(prevState => prevState -= 1);      
                }    
            }
        else{
            toast.error("Letra já verificada!", {autoClose:1000});
        }

        if (refreshDisplay.join("") === pickedWord){
            setPontos(lastScore => lastScore += 1);
            end(1);
        }
    }

    return (
    <div className={s.divBody}>
        <div className={s.points}><span>Pontuação = {pontos}</span></div>

        <h1 className={s.h1}>Adivinhe a palavra:</h1>
        <h3 className={s.h3}>Dica: <span>{pickedCategory}</span></h3>

        <div className={s.wordContainer}>
            {wordDisplay.map((palavra,index) => {return <span key={index}
             style={(window.matchMedia("(max-width: 500px)").matches) ? 
             {width: `${60 / pickedWord.length}vw`} : 
             {width: "40px"}
             }>
                {palavra}
            </span>})}
        </div>

        <div className={s.letterContainer}>
            <p>Tente adivinhar uma letra:<span>({tries} tentativas)</span></p>
            <div>
                <form onSubmit={handleChange}>
                    <input type="text" name='letter' onChange={(e)=>{setGuessLetter(e.target.value.toLowerCase());}} maxLength="1" pattern="^[a-zA-Z]+$" required/>
                    <button type='submit'>Adivinhar</button>
                </form>
            </div>
        </div>

        <div className={s.wrongLetterContainer}>
            <div>Letra erradas: 
            {wrongWord.map((letter, i) => <span key={i}>{letter}</span>)}
            </div>
        </div>
        <div>
        <button onClick={terminar}>Terminar Jogo</button>
        </div>
        <ToastContainer />
    </div>
  )
}

export default GameScreen