import Detail from '../components/Detail/Detail.component';
import Home from '../components/Home/Home.component';
import List from '../components/List/List.component';
import {StackNavigator} from 'react-navigation';

const HomeStackNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  List: {
    screen: List,
    navigationOptions: {
      headerTitle: 'List'
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerTitle: 'Detail'
    }
  }
});

export default HomeStackNavigator;
