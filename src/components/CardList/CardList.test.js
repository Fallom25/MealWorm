import CardList from './';
import Card from './../Card';
import { shallow } from 'enzyme';
import recipes from './../../data/recipes.js';

describe("CardList Component Tests", () => {
    it('should render x cards', () => {
        const recipesLength = recipes.length;
        const wrapper = shallow(<CardList dishList={recipes} />);
        expect(wrapper.find(Card).length).toBe(recipesLength);
    })
});
