import logo from './logo.svg';
import './App.css';

import Congrats from './Congrats';
import GuessWords from './GuessWords';

import Input from './Input';

function App() {

  const success = false;
  const secretWord = 'party';
  //const guessWords = [{guessedWord:'agile',letterMatchCount:1}];
  const guessWords = [];

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
