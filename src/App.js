import './App.css';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

class App extends Component {

  render () {
    return (
      <Provider store = {ConfigureStore()}>
        <div>
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
