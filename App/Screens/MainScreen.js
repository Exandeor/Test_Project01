import { useState, useRef } from 'react';
import { FlatList, StatusBar, View, Animated, Dimensions} from 'react-native';

import { FirstPlusSecondBox } from '../Parts/First+SecondBox';
import { FriendListScreen } from './FriendListScreen'
import { ThirdBox } from '../Parts/ThirdBox';

import { styles } from './styles';

import { Story } from '../Parts/ThirdBox';
import { WatchScreen } from './WatchScreen';



const width  = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
/*
export function MainScreen() {
  return(
    <FlatList
      data={list}
      renderItem={({item}) => 
          <View>
            {item.component}
          </View>
  }
  />
  )
}
*/


export function MainScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const goUp = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: -50,
      duration: 250,
      useNativeDriver: false
    }).start();
  };
  
  const comeDown = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false
    }).start();
  };

  const scrollRef = useRef();

  const onPressTouch = () => {
    scrollRef.current.scrollToIndex({ animated: true, index: 0 })
  }



  const [yValue,setyValue] = useState();
  const [xValue,setxValue] = useState();
  const [slideToLeft,setSlideToLeft] = useState(false);
  const [slideToRight,setSlideToRight] = useState(false);

  const componentArray = [
    {component: <FirstPlusSecondBox up={slideToLeft} down={slideToRight}/>,  id : 1},
   // {component : <FriendListScreen/>, id : 2},

    
    {component : <ThirdBox left={slideToLeft} right={slideToRight}/>, id : 2},
  
  ];

  return(

    <Animated.View style={[styles.MainBackground,{top : fadeAnim }]}
      onStartShouldSetResponder={() => true}
      onTouchStart={ (e) => {setyValue(e.nativeEvent.pageY);setxValue(e.nativeEvent.pageX); console.log("touched")}}
      onTouchMove= {(e) => {        if( e.nativeEvent.pageX + 30 < xValue )
        
        {  setSlideToLeft(true);setSlideToRight(false)} 
 else if( e.nativeEvent.pageX - 30 > xValue)
        { setSlideToLeft(false);setSlideToRight(true)} }}
    >
        <StatusBar backgroundColor={"black"}/>
        <View style={styles.flatListContainer}>
        <FlatList 

                ref={scrollRef}
                stickyHeaderIndices={[0]}
                data={componentArray}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => 
                <View
                
                >
                  {item.component}
                </View>
               }
        />


        </View>  
        <FriendListScreen left={slideToLeft} right={slideToRight}/>
    </Animated.View>
) }

/*This is wrong on so many levels

     onStartShouldSetResponder={e=> {setyValue(e.nativeEvent.pageY);setxValue(e.nativeEvent.pageX); }}
     onMoveShouldSetResponder={e => {
      if( e.nativeEvent.pageX + 30 < xValue )
        {  setSlideToLeft(true);setSlideToRight(false)} 
 else if( e.nativeEvent.pageX - 30 > xValue)
        { setSlideToLeft(false);setSlideToRight(true)}
        return false
        
}}

*/

/*
        <FlatList 

                ref={scrollRef}
                stickyHeaderIndices={[0]}
                data={componentArray}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => 
                <View
                
                >
                  {item.component}
                </View>
               }
        />
*/

/*
    onTouchStart={e=> {setyValue(e.nativeEvent.pageY);setxValue(e.nativeEvent.pageX)} } 
    onTouchMove={ e => {
           if( e.nativeEvent.pageX + 30 < xValue )
             {  setSlideToLeft(true);setSlideToRight(false)} 
      else if( e.nativeEvent.pageX - 30 > xValue)
             { setSlideToLeft(false);setSlideToRight(true)}
             
} }
*/

/*
            <View style={styles.MainBackground}>
                  <FlatList
                  data={componentArray}
                  keyExtractor={message => message.id.toString()}
                  renderItem={({item}) => 
                         <View>
                            {item.component}
                         </View>
                  }
                 />
            </View>
*/

/*              <FlatList
                  data={componentArray}
                  keyExtractor={message => message.id.toString()}
                  renderItem={({item}) => 
                         <View>
                            {item.component}
                         </View>
                  }
              />*/

/*      <View style={styles.firstBox}>
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
      <View style={styles.thirdBox}>
         <View style = {styles.profileContainer}>
           <Image 
              source = {require('../assets/logo.jpg')}
              style = {styles.profileImage}
            />
           <TextInput 
              placeholder="What's on your mind?"
              placeholderTextColor={"white"}
              style = {{backgroundColor: "red",
                        width : "80%",
                        height: "60%",
                        borderRadius : 50,
                        paddingHorizontal : 20

                        
             }}   
           /> 
         </View>
         <View style={styles.storyContainer}>
            <Image style={styles.story}/>
            <Image style={styles.story}/>
            <Image style={styles.story}/>
         </View> 
      </View>
*/

/*

firstBox: {
flex: 0.5,
justifyContent: "space-between",
flexDirection : "row",
backgroundColor : "#262626",
AlignItems: "space-between",
paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0
} ,

facebookLogo:{
width : 130,
height : 50,
} ,

twoIconsContainer: {
  width : 100,
  height:50,
  alignItems : "center",
  justifyContent : "space-around",
  flexDirection : "row"
} ,

searchIcon: {
width: 50,
height:50,
borderRadius: 50
} ,

messengerIcon: {
width:50,
height: 50,
borderRadius:50
}  ,

secondBox: {
flex: 0.5,
backgroundColor : "#262626",
flexDirection : "row",
justifyContent : "space-between"
} ,

fiveIconsContainer: {
flex : 1,
justifyContent : "center",
alignItems : "center"
} ,

fiveIcons: {

} ,
thirdBox: {
flex: 7,
backgroundColor : "white"
} ,

profileContainer: {
  backgroundColor : "cyan",
  flexDirection : "row",
  justifyContent : "space-around",
  alignItems : "center",
  width  : '100%',
  height : "8%"
} ,

profileImage: {
width:  40,
height: 40,
borderRadius: 50,


} ,

storyContainer: {
  height : "32%",
  width : "100%",
  backgroundColor: "#262626",
  marginVertical : "2.5%"
} ,
*/