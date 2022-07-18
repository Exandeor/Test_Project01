import { View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useRef } from "react";
import Display from 'react-native-display';
import { styles } from './styles'

export function FirstBox({condition}) {
  return (

    <View style={[styles.firstBox]}>
      <View> 
           <Image
              style={styles.facebookLogo}  
              source={require('../assets/FacebookLogin.png')} 
                          
           />
      </View>
      <View style = {styles.twoIconsContainer}>
        <View style = {{
          borderRadius : 50,
          width : 35,
          height :35,
          justifyContent : 'center',
          alignItems : "center",
          backgroundColor : "#333333",
        
          } }
        >
            <FontAwesome5 name="search"    size= {20} color = "white"/>
        </View>
        <View style = {{
          borderRadius : 50,
          width : 35,
          height :35,
          justifyContent : 'center',
          alignItems : "center",
          backgroundColor : "#333333",
         }}
        >
            <MaterialCommunityIcons name="facebook-messenger" size= {20} color = "white"/>
        </View>
      </View>  
    </View> 
  
  )
}

/*
    return (
    <View style={[styles.firstBox]}>
      <View> 
           <Image
              style={styles.facebookLogo}  
              source={require('../assets/FacebookLogin.png')} 
                          
           />
     </View>
     <View style = {styles.twoIconsContainer}>
        <View style = {{
          borderRadius : 50,
          width : 35,
          height :35,
          justifyContent : 'center',
          alignItems : "center",
          backgroundColor : "#333333",
        
          } }
        >
            <FontAwesome5 name="search"    size= {20} color = "white"/>
        </View>
        <View style = {{
          borderRadius : 50,
          width : 35,
          height :35,
          justifyContent : 'center',
          alignItems : "center",
          backgroundColor : "#333333",
         }}
        >
            <MaterialCommunityIcons name="facebook-messenger" size= {20} color = "white"/>
        </View>
     </View>  
</View> 

    ) 
*/