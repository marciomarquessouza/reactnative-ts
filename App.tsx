import { applyMiddleware, createStore } from 'redux';
import AppNavigation from './src/screens/AppNavigation';
import { Provider } from 'react-redux';
import { reducers } from './src/reducers';
import React from 'react';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

export default function App(): JSX.Element {
  return (
    <Provider store = { store }>
      <AppNavigation />
    </Provider>
  );
}
