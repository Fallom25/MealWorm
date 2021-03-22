import FeedbackPanel from "./index";
import { shallow } from 'enzyme';

describe("FeedbackPanel Tests", () => {
    const panel;
    
    beforeEach(() => {
      panel = shallow(<FeedbackPanel header="Test header" text="Test text" />);
    })
    
    it('should render', () => {
        expect(panel).toBeTruthy();
    })
    
    it('should render the header passed in as props', () => {
        expect(panel.text()).toContain('Test header');
    })
    
    it('should render the text passed in as props', () => {
        expect(panel.text()).toContain('Test text');
    })

})