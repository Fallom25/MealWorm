import SearchBar from './';
import { shallow, mount } from 'enzyme';

describe("SearchBar Component Tests", () => {
    it('should render', () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper).toBeTruthy();
    });

    it('should call setter', () => {
        const myMock = jest.fn(); // Stateful functions, e.g aware calls, 
        const wrapper = mount(<SearchBar setSearch={myMock} opened={true} />)
        const input = wrapper.find('input');
        expect(myMock.mock.calls.length).toBe(0);
        input.simulate('change');
        expect(myMock.mock.calls.length).toBe(1);
        input.simulate('change');
        input.simulate('change');
        expect(myMock.mock.calls.length).toBe(3);
    });

    it('should open and close on click', () => {
        const myMock = jest.fn();
        const wrapper = shallow(<SearchBar setSearch={myMock} opened={true} />)
        const button = wrapper.find('opened');
        expect(myMock.opened).toBe(true);
        button.simulate('click');
        expect(myMock.opened).toBe(false);
        button.simulate('click');
        expect(myMock.opened).toBe(true);
    });
})

