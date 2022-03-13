import React from 'react';
import { shallow } from "enzyme";
import GuessWords from "./GuessWords";


describe('if no words guessed',() =>{
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<GuessWords guessWords={[]}/>);
    });

    test('todo bien',() =>{
        const component = wrapper.find(`[data-test='component-guessed-word']`);
        expect(component.length).toBe(1);
    });

    test('instructions',() =>{
        const instructions = wrapper.find(`[data-test='guess-instructions']`);
        expect(instructions.text().length).not.toBe(0);
    });


    
})

describe('if words guessed',() =>{
    const guessWords = [
        {guessedWord:'train',letterMatchCount:3},
        {guessedWord:'agile',letterMatchCount:1},
        {guessedWord:'party',letterMatchCount:5},
    ];
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<GuessWords guessWords={guessWords}/>);
    });
    test('render without error',() =>{
        const component = wrapper.find(`[data-test='component-guessed-word']`);
        expect(component.length).toBe(1);
    });

    test('render guess word section',() =>{
        const guessedWordsNode = wrapper.find(`[data-test='guessed-words']`);
        expect(guessedWordsNode.length).toBe(1);
    });

    test('correct number',() =>{
        const guessedWordsNodes = wrapper.find(`[data-test='guessed-word']`);
        expect(guessedWordsNodes.length).toBe(guessWords.length);
    })
})