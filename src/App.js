import React from 'react';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import store from './examples/simple_redux/store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Routes />
      </Provider>
    </div>
  );
}

export default App;
