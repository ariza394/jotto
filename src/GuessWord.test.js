import React from 'react';
import  { mount } from 'enzyme';

import App from './App';

const setup = (state={}) =>{
    const wrapper = mount(<App />)

    const inputBox = wrapper.find(`[data-test='input-box']`);
    inputBox.simulate('change',{targe:{value:'train'}});

    //simulate click
    const submitButton = wrapper.find(`[data-test='submit-button']`);
    submitButton.simulate('click', {preventDefault() {} });

    return wrapper;
}

describe.skip('no letters guessed',() =>{
    let wrapper;
    beforeEach(() =>{
        wrapper = setup({
            secretWord:'party',
            success:false,
            guessWords:[]
        })
    });

    test('create words table with one row',() =>{
        const guessWordRows = wrapper.find(`[data-test='guessed-word']`);
        expect(guessWordRows).toHaveLength(1);
    });
});

describe.skip('some letters guessed',() =>{
    let wrapper;
    beforeEach(() =>{
        wrapper = setup({
            secretWord:'party',
            success:false,
            guessWords:[{guessedWord:'agile',letterMatchCount:1}]
        })
    });

    test('add row',() =>{
        const guessWordRows = wrapper.find(`[data-test='guessed-word']`);
        expect(guessWordRows).toHaveLength(2);
    })
});

describe.skip('guessed the word',() =>{
    let wrapper;
    beforeEach(() =>{
        wrapper = setup({
            secretWord:'party',
            success:false,
            guessWords:[{guessedWord:'agile',letterMatchCount:1}]
        });

        //add value
        const inputBox = wrapper.find(`[data-test='input-box']`);
        const mockEvent = {target: {value:'party'}};
        inputBox.simulate('change',mockEvent);


        //simulate click
        const submitButton = wrapper.find(`[data-test='submit-button']`);
        submitButton.simulate('click', {preventDefault() {} });
    });

    test('adds rows to guessedWords table',() =>{
        const guessedWordNodes = wrapper.find(`[data-test='guessed-word']`);
        expect(guessedWordNodes).toHaveLength(3);
    });

    test('displays congrats component',() =>{
        const congrats = wrapper.find(`[data-test='component-congrats']`);
        expect(congrats.text().length).toBeGreaterThan(0);
    });

    test('does not display input component contents',() =>{
        /* const inputBox = wrapper.find(`[data-test='input-box']`);
        expect(inputBox.exists()).toBe(false);

        const submitButton = wrapper.find(`[data-test='submit-button']`);
        expect(submitButton.exists()).toBe(false); */
        const input = wrapper.find(`[data-test='component-input']`);
        expect(input.text().length).toBe(0);
    });
});