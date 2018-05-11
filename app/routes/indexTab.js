import About from '../components/About/About.component';
import Detail from '../components/Detail/Detail.component';
import Setting from '../components/Setting/Setting.component';
import VectorIcon from '../components/VectorIcon/VectorIcon.component';
import {StackNavigator, TabNavigator} from 'react-navigation';

const DetailStackNavigator = StackNavigator({
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerTitle: 'Detail Nav',
      tabBarLabel: 'Detail Tab'
    }
  }
});

const AboutStackNavigator = StackNavigator({
  About: {
    screen: About,
    navigationOptions: {
      headerTitle: 'About Nav',
      tabBarLabel: 'About Tab'
    }
  }
});

const SettingStackNavigator = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: {
      headerTitle: 'Setting Nav',
      tabBarLabel: 'Setting Tab'
    }
  }
});

const VectorIconStackNavigator = StackNavigator({
  VectorIcon: {
    screen: VectorIcon,
    navigationOptions: {
      headerTitle: 'VectorIcon Nav',
      tabBarLabel: 'VectorIcon Tab'
    }
  }
});

// ----------

const tabPages = {
  Detail: {
    screen: DetailStackNavigator
  },
  About: {
    screen: AboutStackNavigator
  },
  Setting: {
    screen: SettingStackNavigator
  },
  VectorIcon: {
    screen: VectorIconStackNavigator
  }
};

const config = {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  backBehavior: 'none',
  tabBarOptions: {
    activeTintColor: '#e91e63'
  }
};

const HomeTabNavigator = TabNavigator(tabPages, config);

export default HomeTabNavigator;
