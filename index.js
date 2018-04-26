import App from './app/index';
import {AppRegistry} from 'react-native';

if (__DEV__) {
  global.XMLHttpRequest = global.originalXMLHttpRequest ?
    global.originalXMLHttpRequest :
    global.XMLHttpRequest;
  global.FormData = global.originalFormData ?
    global.originalFormData :
    global.FormData;
}

AppRegistry.registerComponent('RNOnsenStarter', () => App);
