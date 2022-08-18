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

  const renderPage = () =>{
    switch (gameStage){
       case "Start":
         return <StartScreen startGame = {startGame}></StartScreen>;

       case "Game":
         return <GameScreen verifyLetter = {verifyLetter} randomPick = {{pickedCategory, pickedWord}}></GameScreen>

       case "End":
         return <EndScreen retry = {retry}></EndScreen>
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

  const verifyLetter = ()=>{
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
