import React, {Component} from 'react';
import Router from './routes/index';
// import RouterDrawer from './routes/indexDrawer';
// import RouterStack from './routes/indexStack';
// import RouterTab from './routes/indexTab';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';

class App extends Component {
  render () {
    return <Router/>;
  }
}

// export default App;

// ----------

const store = initStore();

class ProvidedApp extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default ProvidedApp;
