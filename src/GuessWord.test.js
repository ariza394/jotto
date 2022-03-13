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

describe('no letters guessed',() =>{
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

describe('some letters guessed',() =>{
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
        expect(guessWordRows).toHaveLength(1);
    })
});

describe('guessed the word',() =>{

});