import Icon from 'react-native-vector-icons/Foundation';
import React from 'react';
import Setting from '../components/Setting/Setting.component';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

const getRootHomeNavOpt01 = ({navigation}) => {
  const onPressMenuButton = () => {
    navigation.navigate('DrawerToggle');
  };
  
  const MenuButton = ( // eslint-disable-next-line
    <Icon.Button name='list' color='red' iconStyle={{padding: 10}} backgroundColor='transparent' onPress={onPressMenuButton}/>
  );

  return {
    headerTitle: 'Setting Title A',
    headerLeft: MenuButton,
    drawerLabel: 'Setting A'
  };
};

const SettingStackNavigator01 = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: getRootHomeNavOpt01
  }
});

const getRootHomeNavOpt02 = ({navigation}) => {
  const onPressMenuButton = () => {
    navigation.navigate('DrawerToggle');
  };
  
  const MenuButton = ( // eslint-disable-next-line
    <Icon.Button name='list' color='green' iconStyle={{padding: 10}} backgroundColor='transparent' onPress={onPressMenuButton}/>
  );

  return {
    headerTitle: 'Setting Title B',
    headerLeft: MenuButton,
    drawerLabel: 'Setting B'
  };
};

const SettingStackNavigator02 = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: getRootHomeNavOpt02
  }
});

const getRootHomeNavOpt03 = ({navigation}) => {
  const onPressMenuButton = () => {
    navigation.navigate('DrawerToggle');
  };
  
  const MenuButton = ( // eslint-disable-next-line
    <Icon.Button name='list' color='blue' iconStyle={{padding: 10}} backgroundColor='transparent' onPress={onPressMenuButton}/>
  );

  return {
    headerTitle: 'Setting Title C',
    headerLeft: MenuButton,
    drawerLabel: 'Setting C'
  };
};

const SettingStackNavigator03 = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: getRootHomeNavOpt03
  }
});

// ----------

const HomeDrawerNavigator = DrawerNavigator({
  Setting01: {
    screen: SettingStackNavigator01
  },
  Setting02: {
    screen: SettingStackNavigator02
  },
  Setting03: {
    screen: SettingStackNavigator03
  }
});

export default HomeDrawerNavigator;
