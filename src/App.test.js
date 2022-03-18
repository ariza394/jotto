import { mount } from 'enzyme';
import App from './App';

//activate global mock
jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions';

test('render without error', () => {
    const wrapper = mount(<App />);
    const appComponent = wrapper.find(`[data-test='component-app']`);
    expect(appComponent).toHaveLength(1);
});

describe('get secret word', () =>{

    beforeEach(() =>{
        mockGetSecretWord.mockClear();
    });

    test('getSecretWord on app mount', () =>{
        expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
    });

    test('getSecretWord does not run when update',() =>{
        const wrapper = mount(<App />);
        mockGetSecretWord.mockClear();


        //use setProps beacase wrapper.update() does not trigger effect in useEffect
        wrapper.setProps();
        expect(mockGetSecretWord).toHaveBeenCalledTimes(0);

    });
});