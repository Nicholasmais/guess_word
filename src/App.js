//SCSS
//import './App.scss';

//Components
import Header from './components/header/Header';
import StartScreen from './components/startscreen/StartScreen';
import GameScreen from './components/gamescreen/GameScreen';
import EndScreen from './components/endscreen/EndScreen';

//React
import {useCallback, useEffect, useState} from 'react';

//Data
import {wordsList} from "./data/words";
import { ScoreContext } from './Contexts/ScoreContext';

const stages = [
{id:1, name:"Start"},
{id:2, name:"Game"},
{id:3, name:"End"}
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [pontos, setPontos] = useState(0);
 const renderPage = () =>{
    switch (gameStage){
       case "Start":
         return <ScoreContext.Provider value={{pontos, setPontos}}><StartScreen startGame = {startGame}></StartScreen> </ScoreContext.Provider> ;

       case "Game":
         return <ScoreContext.Provider value={{pontos, setPontos}}> <GameScreen end = {end} randomPick = {{pickedCategory, pickedWord}}></GameScreen></ScoreContext.Provider> 

       case "End":
         return <ScoreContext.Provider value={{pontos, setPontos}}> <EndScreen retry = {retry}></EndScreen></ScoreContext.Provider> 
 }
}

  const pickWordAndcategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word = words[category][Math.floor(Math.random() * Object.keys(words[category]).length)].toLowerCase();
   
    return {category,word};
  }

  const startGame = () =>{
    const {category, word} = pickWordAndcategory();
    const wordLetters = word.split("");

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }

  const end = ()=>{
    setGameStage(stages[2].name);
  }

  const retry = () =>{
    startGame();
  }

  return (
    <div className="App">
      <Header></Header>
      {renderPage()}
      
    </div>
  );
}

export default App;
