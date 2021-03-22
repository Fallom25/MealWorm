// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

// jest.fn() // creates a stateful mock function that's aware of calls
// shallow // renders a component in isolation, does not render child components
//   - => ShallowWrapper Object
// .simulate // Allows us to simulate DOM events on react components
// .find // find allows us to find children based on class, id, component identifier, and tagname

