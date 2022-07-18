import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Display from 'react-native-display';

import { styles } from './styles';

export function SecondBox({condition}) {
 return ( 
    <View style={styles.secondBox}>
        <View style = {styles.fiveIconsContainer}>
          <MaterialCommunityIcons 
             name = "home" 
             size = {30}
             color = "white"
             
        /></View>
        <View style = {styles.fiveIconsContainer}>
          <FontAwesome5 
            name = "user-friends" 
            size = {25}
            color = "white"
            
        /></View>
        <View style = {styles.fiveIconsContainer}>
          <MaterialCommunityIcons 
            name = "television-play" 
            size = {30}
            color = "white"
            
        /></View>
        <View style = {styles.fiveIconsContainer}>
          <MaterialCommunityIcons 
            name = "bell" 
            size = {30}
            color = "white"
            
        /></View>
        <View style = {styles.fiveIconsContainer}>
          <MaterialCommunityIcons 
            name = "menu" 
            size = {30}
            color = "white"
            
        /></View>
    </View>
     
            ) }
        

