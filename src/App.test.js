import { shallow } from 'enzyme';
import App from './App';

test('render without error', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find(`[data-test='component-app']`);
    expect(appComponent).toHaveLength(1);
});
