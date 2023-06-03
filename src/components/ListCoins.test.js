import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import ListCoins from './ListCoins';

describe('Test for the home page', () => {
  test('Home Page rendering correct', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <ListCoins />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
