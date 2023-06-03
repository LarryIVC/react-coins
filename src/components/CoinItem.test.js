import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import CoinItem from './CoinItem';

describe('Test for the home page', () => {
  const coin = {
    uuid: '1',
    name: 'Test',
    iconUrl: 'http://test.gif',
    symbol: 'TST',
  };
  test('Home Page rendering correct', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CoinItem coin={coin} />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
