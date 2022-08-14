import React from 'react';
import MainStack from './src/screens';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => (
  <Provider store={store}>
    <MainStack />
  </Provider>
);

export default App;
