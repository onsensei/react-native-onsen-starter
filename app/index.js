import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Router from './routes/index';
// import RouterDrawer from './routes/indexDrawer';
// import RouterStack from './routes/indexStack';
// import RouterTab from './routes/indexTab';
import {addNavigationHelpers} from 'react-navigation';
import {connect, Provider} from 'react-redux';
import {createReactNavigationReduxMiddleware, createReduxBoundAddListener} from 'react-navigation-redux-helpers';
import {initStore} from './redux/store';

// redux router
// use navigation state in redux instead of state in react-navigation

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
// const middleware = createReactNavigationReduxMiddleware(
createReactNavigationReduxMiddleware(
  'root',
  (state) => state.nav,
);
const addListener = createReduxBoundAddListener('root');

class ReduxRouter extends Component {
  render () {
    const {dispatch, nav} = this.props;
    const navigation = addNavigationHelpers({dispatch, state: nav, addListener});
    return <Router navigation={navigation} />;
  }
}

ReduxRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

ReduxRouter.defaultProps = {
  dispatch: noop,
  nav: null
};

const mapStateToProps = (state) => ({nav: state.nav});

const ConnectedRouter = connect(mapStateToProps)(ReduxRouter);

// app (store + redux router)

const store = initStore();

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter />
      </Provider>
    );
  }
}

export default App;
