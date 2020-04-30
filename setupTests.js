import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

Enzyme.configure({ adapter: new Adapter() })

const middlewares = [thunk];

export const mockStore = configureStore(middlewares)
export const initialState = {
  city: '',
  results: [],
  errorMessage: undefined,
}