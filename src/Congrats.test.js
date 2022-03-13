import { shallow } from 'enzyme';

//components
import Congrats from './Congrats'



const setup = (props={}) =>{
    return shallow(<Congrats {...props} />)
}

test('render without error',() =>{
    const wrapper = shallow(<Congrats />);
    const component = wrapper.find(`[data-test='component-congrats']`);
    expect(component.length).toBe(1)
});

test('props is false',() =>{
    const wrapper = shallow(<Congrats success={false}/>);
    const component = wrapper.find(`[data-test='component-congrats']`);
    expect(component.text()).toBe('');
})

test('props is ture',() =>{
    const wrapper = shallow(<Congrats success={true}/>);
    const message = wrapper.find(`[data-test='congrats-message']`);
    expect(message.text().length).not.toBe(0);
})
