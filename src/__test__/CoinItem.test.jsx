import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'react-dom';
import CoinItem from '../components/CoinItem';

test('render content', () => {
  const coin = {
    uuid:'1',
    name:'Test',
    iconUrl: 'http://test.gif',
    symbol: 'TST',
  }

  const component = render(<CoinItem coin={coin} />);

  console.log(component);
  
})