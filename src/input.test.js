import React from 'react';
import { shallow } from "enzyme";
import Input from './Input';

const mockSetCurrentGuess = jest.fn();
jest.mock('react',()=>({
    ...jest.requireActual('react'),
    useState:(initialState) =>[initialState,mockSetCurrentGuess]
}));

describe('render',() =>{
    describe('success is true',() =>{
        let wrapper;
        beforeEach(() =>{
            wrapper = shallow(<Input success={true} secredWord={'party'}/>)
        });

        test('component exists',() =>{
            let wrapper = shallow(<Input />);
            const inputComponent = wrapper.find(`[data-test='component-input']`);
            expect(inputComponent.length).toBe(1);
        });

        test('input box does not show',() =>{
            const inputBox = wrapper.find(`[data-test='input-box']`);
            expect(inputBox.exists()).toBe(false);
        });

        test('submit button does not show',() =>{
            const submitButton = wrapper.find(`[data-test='submit-button']`);
            expect(submitButton.exists()).toBe(false);
        });

    });

    describe('success is false',() =>{
        let wrapper;
        beforeEach(() =>{
            wrapper = shallow(<Input success={false} secredWord={'party'}/>)
        });

        test('component exists',() =>{
            let wrapper = shallow(<Input />);
            const inputComponent = wrapper.find(`[data-test='component-input']`);
            expect(inputComponent.length).toBe(1);
        });

        test('input box show',() =>{
            const inputBox = wrapper.find(`[data-test='input-box']`);
            expect(inputBox.exists()).toBe(true);
        });

        test('submit button show',() =>{
            const submitButton = wrapper.find(`[data-test='submit-button']`);
            expect(submitButton.exists()).toBe(true);
        });

    });
})

describe('state controled input field',() =>{
    let wrapper;
    let ofiginalUseState;

    beforeEach(() =>{   
        mockSetCurrentGuess.mockClear(); 
        ofiginalUseState = React.useState;    
        React.useState = jest.fn(()=>["",mockSetCurrentGuess]);
        wrapper = shallow(<Input secredWord={'party'}/>);
    });
    afterAll(() =>{
        React.useState = ofiginalUseState;
    });

    test('state update with value of input box changed',() =>{
        const inputBox = wrapper.find(`[data-test='input-box']`);        
        const mockEvent = {target:{value:'train'}};
        inputBox.simulate('change',mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    });

    test('field is cleared upon submit button click',() =>{
        const submitButton = wrapper.find(`[data-test='submit-button']`);
        submitButton.simulate('click',{ preventDefault(){}});

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    })
});