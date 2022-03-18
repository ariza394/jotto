import './App.css';
import { useEffect } from 'react';
import Congrats from './Congrats';
import GuessWords from './GuessWords';

import Input from './Input';

import { getSecretWord } from './actions';

function App() {

  const success = false;
  const secretWord = 'party';
  //const guessWords = [{guessedWord:'agile',letterMatchCount:1}];
  const guessWords = [];

  useEffect(() =>{
    getSecretWord();
  },[]);

  return (
    <div data-test='component-app' className="App">
          <h1>Jotto</h1>
        <Congrats success={success} />
        <Input success={success} secredWord={secretWord}/>
        <GuessWords guessWords={guessWords} />
    </div>
  );
}

export default App;
