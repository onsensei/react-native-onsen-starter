import Setting from '../components/Setting/Setting.component';
import {StackNavigator, TabNavigator} from 'react-navigation';

const SettingStackNavigator01 = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: {
      headerTitle: 'Setting Title 01',
      tabBarLabel: 'Setting Tab 01'
    }
  }
});

const SettingStackNavigator02 = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: {
      headerTitle: 'Setting Title 02',
      tabBarLabel: 'Setting Tab 02'
    }
  }
});

const SettingStackNavigator03 = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: {
      headerTitle: 'Setting Title 03',
      tabBarLabel: 'Setting Tab 03'
    }
  }
});

// ----------

const tabPages = {
  Setting01: {
    screen: SettingStackNavigator01
  },
  Setting02: {
    screen: SettingStackNavigator02
  },
  Setting03: {
    screen: SettingStackNavigator03
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
