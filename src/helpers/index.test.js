import {getLetterMatchCount} from './';

describe('getLetterMatchCount',() =>{
    const secredWord = 'party';
    test('return correct count when there are not matching letters',() =>{
        const letterMatchCount = getLetterMatchCount('bones',secredWord);
        expect(letterMatchCount).toBe(0);
    });

    test('return the correct count when there are three matchng letters',() =>{
        const letterMatchCount = getLetterMatchCount('train',secredWord);
        expect(letterMatchCount).toBe(3)
    });

    test('when duplicate letters',() =>{
        const letterMatchCount = getLetterMatchCount('parka',secredWord);
        expect(letterMatchCount).toBe(3)
    });
})