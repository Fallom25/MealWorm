import { shallow } from 'enzyme';
import Card from '../..';
import CardFront from './../CardFront';
import CardBack from './../CardBack';
import recipes from './../../data/recipes.js';

describe("Card Component Tests", () => {
    it("should render", () => {
        const wrapper = shallow(<Card />);
        expect(wrapper).toBeTruthy();
    });

    it("should render CardFront", () => {
        const recipe = recipes[0];
        const wrapper = shallow(<Card dishInformation={recipe} />)
        expect(wrapper.find(CardFront).length).toBe(1);
        expect(wrapper.find(CardBack).length).toBe(0);
    });

    it('should flip when clicked', () => {
        const recipe = recipes[0];
        const wrapper = shallow(<Card dishInformation={recipe} />);

        expect(wrapper.find(CardFront).length).toBe(1);
        expect(wrapper.find(CardBack).length).toBe(0);

        wrapper.simulate('click');

        expect(wrapper.find(CardFront).length).toBe(0);
        expect(wrapper.find(CardBack).length).toBe(1);

        wrapper.simulate('click');

        expect(wrapper.find(CardFront).length).toBe(1);
        expect(wrapper.find(CardBack).length).toBe(0);
    });
});