import About from '../components/About/About.component';
import Detail from '../components/Detail/Detail.component';
import Home from '../components/Home/Home.component';
import Icon from 'react-native-vector-icons/Foundation';
import List from '../components/List/List.component';
import React from 'react';
import Setting from '../components/Setting/Setting.component';
import VectorIcon from '../components/VectorIcon/VectorIcon.component';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

const getRootHomeNavOpt01 = ({navigation}) => {
  const onPressMenuButton = () => {
    navigation.navigate('DrawerToggle');
  };
  
  const MenuButton = ( // eslint-disable-next-line
    <Icon.Button name='list' color='red' iconStyle={{padding: 10}} backgroundColor='transparent' onPress={onPressMenuButton}/>
  );

  return {
    headerTitle: 'Home Nav',
    headerLeft: MenuButton,
    drawerLabel: 'Home Drawer'
  };
};

const HomeStackNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: getRootHomeNavOpt01
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

const getRootHomeNavOpt02 = ({navigation}) => {
  const onPressMenuButton = () => {
    navigation.navigate('DrawerToggle');
  };
  
  const MenuButton = ( // eslint-disable-next-line
    <Icon.Button name='list' color='green' iconStyle={{padding: 10}} backgroundColor='transparent' onPress={onPressMenuButton}/>
  );

  return {
    headerTitle: 'About Nav',
    headerLeft: MenuButton,
    drawerLabel: 'About Drawer'
  };
};

const AboutStackNavigator = StackNavigator({
  About: {
    screen: About,
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
    headerTitle: 'Setting Nav',
    headerLeft: MenuButton,
    drawerLabel: 'Setting Drawer'
  };
};

const SettingStackNavigator = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: getRootHomeNavOpt03
  }
});

const getRootHomeNavOpt04 = ({navigation}) => {
  const onPressMenuButton = () => {
    navigation.navigate('DrawerToggle');
  };
  
  const MenuButton = ( // eslint-disable-next-line
    <Icon.Button name='list' color='black' iconStyle={{padding: 10}} backgroundColor='transparent' onPress={onPressMenuButton}/>
  );

  return {
    headerTitle: 'VectorIcon Nav',
    headerLeft: MenuButton,
    drawerLabel: 'VectorIcon Drawer'
  };
};

const VectorIconStackNavigator = StackNavigator({
  VectorIcon: {
    screen: VectorIcon,
    navigationOptions: getRootHomeNavOpt04
  }
});

// ----------

const HomeDrawerNavigator = DrawerNavigator({
  Home: {
    screen: HomeStackNavigator
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
});

export default HomeDrawerNavigator;
