import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconZocial from 'react-native-vector-icons/Zocial';
import React, {Component} from 'react';
import styles from './VectorIcon.style';
import {Text, View} from 'react-native';

export default class VectorIcon extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to VectorIcon page
        </Text>
        <View style={styles.horizontalContainer}>
          <IconEntypo name='mail' size={30} color='#900' />
          <IconEvilIcons name='plus' size={30} color='#900' />
          <IconFeather name='mail' size={30} color='#900' />
          <IconFontAwesome name='rocket' size={30} color='#900' />
          <IconFoundation name='mail' size={30} color='#900' />
        </View>
        <View style={styles.horizontalContainer}>
          <IconIonicons name='logo-playstation' size={30} color='#900' />
          <IconMaterialCommunityIcons name='rocket' size={30} color='#900' />
          <IconMaterialIcons name='replay-30' size={30} color='#900' />
          <IconOcticons name='rocket' size={30} color='#900' />
          <IconSimpleLineIcons name='rocket' size={30} color='#900' />
          <IconZocial name='pocket' size={30} color='#900' />
        </View>
      </View>
    );
  }
}
