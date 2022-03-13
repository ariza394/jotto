import React from 'react';

const GuessWords = (props) => {


    return ( 
        <div data-test='component-guessed-word'>
            {props.guessWords.length === 0 ?
               <span data-test='guess-instructions'>
                    try to guess
                </span> 
                :
                <div data-test='guessed-words'>
                    <h3>Guessed Words</h3>
                    <table className='table table-sm'>
                        <thead className='thead-light'>
                            <tr><th>Guess</th><th>Matching letters</th></tr>
                        </thead>
                        <tbody>
                            {props.guessWords.map((word,idx) =>{
                                return(
                                    <tr data-test='guessed-word' key={idx}>
                                        <td>{word.guessedWord}</td>
                                        <td>{word.letterMatchCount}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </div>
     );
}
 
export default GuessWords;