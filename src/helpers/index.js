export function getLetterMatchCount(guessedWord,secretWord){
    if (guessedWord === secretWord) return 4
    else{
        const arrGuessWords = [...new Set(guessedWord.split(''))];
        const arrSecretWord = [...new Set(secretWord.split(''))];
        
        let total = 0;
        arrSecretWord.map(letter =>  arrGuessWords.indexOf(letter) > -1 ? total+=1 : total)
        return total;
    }      
}