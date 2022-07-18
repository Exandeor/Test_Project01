import { View, Image, TextInput, FlatList, Animated } from 'react-native';
import { useState, useRef } from 'react';
import Display from 'react-native-display';

import { Post } from './Post';
import { styles } from './styles';

const storyArray = [
   {image :require('../assets/Story/Himeko.png') ,   id :  1},
   {image :require('../assets/Story/Kiana.jpg')  ,   id :  2},
   {image :require('../assets/Story/Bronya.jpg') ,   id :  3},
   {image :require('../assets/Story/Mei.jpg') ,      id :  4},
   {image :require('../assets/Story/Theresa.jpg')  , id :  5},
   {image :require('../assets/Story/FuHua.png') ,    id :  6},
   {image :require('../assets/Story/Durandal.png') , id :  7},
   {image :require('../assets/Story/Rita.jpg')  ,    id :  8},
   {image :require('../assets/Story/YaeSakura.jpg') ,id :  9},
   {image :require('../assets/Story/Kallen.jpg'),    id : 10},



];

const skeletonArray = [
        {id : 1, component : <Profile/>},
        {id : 2, component : <Story/>},
        {id : 3, component : <Post/>},
        {id : 4, component : <Post/>},
        {id : 5, component : <Post/>},
        {id : 6, component : <Post/>},
        {id : 7, component : <Post/>},
        {id : 8, component : <Post/>},
        {id : 9, component : <Post/>},
        {id :10, component : <Post/>},
        {id :11, component : <Post/>},
        {id :12, component : <Post/>},
        {id :13, component : <Post/>},
        {id :14, component : <Post/>},
        {id :15, component : <Post/>},
        {id :16, component : <Post/>},
        {id :17, component : <Post/>}, 

];


function Profile() {
    return (
        
        <View style = {styles.ThirdBoxProfileContainer}>
          <Image 
             source = {require('../assets/logo.jpg')}
             style = {styles.ThirdBoxProfileImage}
           />
          <TextInput 
             placeholder="What's on your mind?"
             placeholderTextColor={"white"}
             style = {styles.writeContent}   
          /> 
        </View>
    )
}

export function Story() {
    return (
        <View style={styles.storyContainer}>
        <FlatList 
            horizontal={true}
            data={storyArray}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => 
               <Image 
                    style={styles.storyCard} 
                    source={item.image}/>
            }
        />

    </View> 
    )
}


export function ThirdBox({ left,right }) {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    
    const goLeft = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(fadeAnim, {
        toValue: -400,
        duration: 250,
        useNativeDriver: false
      }).start();
    };
    
    const goRight = () => {
      // Will change fadeAnim value to 0 in 3 seconds
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false
      }).start();
    };

    if(left) goLeft();
    if(right) goRight();

    return (

        <Animated.View style={[styles.thirdBox,{left : fadeAnim}]}>
          <FlatList  
                data={skeletonArray}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) =>      

                    <View 
                       style={{ backgroundColor:"black",
                                width : "100%",
                                paddingBottom :10}}
                    >
                        {item.component}
                    </View>
                 
                    }/>
               
        </Animated.View>    
    

) }
  