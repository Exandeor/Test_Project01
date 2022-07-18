import React, { useRef } from 'react';
import { View , FlatList, Image, TouchableOpacity, Text, Animated} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles';

const array = [
    { id : 1, name : "Himeko",     image :require("../assets/Story/Himeko.png") ,},
    { id : 2, name : "Kiana",      image :require("../assets/Story/Kiana.jpg") ,},
    { id : 3, name : "Bronya",     image :require("../assets/Story/Bronya.jpg") ,},
    { id : 4, name : "Mei",        image :require("../assets/Story/Mei.jpg") ,},
    { id : 5, name : "Fu Hua",     image :require("../assets/Story/FuHua.png") ,},
    { id : 6, name : "Theresa",    image :require("../assets/Story/Theresa.jpg") ,},
    { id : 7, name : "Kallen",     image :require("../assets/Story/Kallen.jpg") ,},
    { id : 8, name : "Yae Sakura", image :require("../assets/Story/YaeSakura.jpg") ,},
    { id : 9, name : "Durandal",   image :require("../assets/Story/Durandal.png") ,},
    { id :10, name : "Rita",       image :require("../assets/Story/Rita.jpg") ,},
    { id :11, name : "Himeko",     image :require("../assets/Story/Himeko.png") ,},
    { id :12, name : "Kiana",      image :require("../assets/Story/Kiana.jpg") ,},
    { id :13, name : "Bronya",     image :require("../assets/Story/Bronya.jpg") ,},
    { id :14, name : "Mei",        image :require("../assets/Story/Mei.jpg") ,},
    { id :15, name : "Fu Hua",     image :require("../assets/Story/FuHua.png") ,},
    { id :16, name : "Theresa",    image :require("../assets/Story/Theresa.jpg") ,},
    { id :17, name : "Kallen",     image :require("../assets/Story/Kallen.jpg") ,},
    { id :18, name : "Yae Sakura", image :require("../assets/Story/YaeSakura.jpg") ,},
    { id :19, name : "Durandal",   image :require("../assets/Story/Durandal.png") ,},
    { id :20, name : "Rita",       image :require("../assets/Story/Rita.jpg") ,}
];



const FirstBox = () => {
    return(
    
         <View  style={styles.FirstBoxContainer}>   
           <Text style={styles.FirstBoxText}>Friends</Text>
           <FontAwesome5 name="search" size ={25} style={{marginHorizontal : 15,color :"silver"}}/>
         </View> 
    
    ) 
    
    }

const SecondBox = () => {
    return (
    
    <View  style={styles.SecondBoxContainer}>
        <TouchableOpacity style={styles.TwoButtons}> 
              <Text style={{fontFamily:"Roboto",fontSize: 15, fontWeight: "900",color: "white"}}>Suggestions</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.TwoButtons}> 
              <Text style={{fontFamily:"Roboto",fontSize: 15, fontWeight: "900",color: "white"}}>Your Friends</Text>
        </TouchableOpacity> 
    </View>
    
    )
}
    
const ThirdBox = () => {    
    return(
    
    <View  style={styles.ThirdBoxContainer}>
        <View style={styles.FriendRequestHeader}>
          <View style={styles.FriendRequestHeader}>
            <Text style={{color: "white",fontFamily:"Roboto",fontWeight: "900",fontSize: 20}}>Friend Requests</Text>
            <Text style={{color: "red",marginHorizontal: 8,fontFamily:"Roboto",fontWeight: "900",fontSize: 20}}>195</Text>
          </View>
          <View><Text style={{color: "#1aa3ff",marginHorizontal: 5,fontFamily:"Roboto",fontWeight: "900",fontSize: 15}}>See All</Text></View> 
        </View>
        <FlatList
           data={array}
           renderItem={({item}) => 
            <TouchableOpacity style={styles.TotalFriendRequest}
            onPress={ e => e.stopPropagation()}

            >
                <View>
                <Image 
                   source={item.image}
                   style={{width : 90,height: 90, borderRadius: 50}}      
                />
                </View>
                <View style={{marginHorizontal: 10}}>
                  <View>
                    <Text style={{fontSize: 18,fontFamily:"Roboto",fontWeight: '900',color: "white",marginBottom: 10}}>{item.name}</Text>
                  </View>
    
                  <View style={styles.ConfirmDeleteButtons}>
                      <TouchableOpacity style={styles.ConfirmButton} onPress={() => console.log("Confirm")}>
                        <Text style={{color: "white",fontWeight: "900",fontFamily: "Roboto"}}>Confirm</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.DeleteButton}>
                        <Text style={{color: "white",fontWeight: "900",fontFamily: "Roboto"}}>Delete</Text>
                      </TouchableOpacity>
                  </View>
                </View>    
            </TouchableOpacity>   }  
        />  
    </View>  )}

const secondArray = [
  {component :<FirstBox/> , id : 1},
  {component :<SecondBox/> , id : 2},
  {component :<ThirdBox/> , id : 3},

  
];
    
export function FriendListScreen({left,right}) {

  const fadeAnim = useRef(new Animated.Value(400)).current;
    
  const goLeft = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false
    }).start();
  };
  
  const goRight = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 400,
      duration: 250,
      useNativeDriver: false
    }).start();
  };

  if(left) goLeft();
  if(right) goRight();

    
    return (
    
       <Animated.View style={[styles.FriendListBackground,{left : fadeAnim}]}>
           <FlatList
                stickyHeaderHiddenOnScroll={true}
                stickyHeaderIndices={[0]}
                data={secondArray}
                renderItem={({item}) => 
                                <View>
                                  {item.component} 
                                </View> } 
           />
       </Animated.View>
) 
}
