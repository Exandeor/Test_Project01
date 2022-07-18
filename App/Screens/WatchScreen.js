
import { View , Text , TouchableOpacity, FlatList} from "react-native";

import { Post } from "../Parts/Post";
import { ThirdBox } from "../Parts/ThirdBox";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';

const suggestions = [
   { Text : "For you" , id : 1},
   { Text : "Live", id : 2 },
   { Text : "Gaming", id : 3},
   { Text : "Following", id : 4},
   { Text : "Saved", id : 5},

];


const FirstBox = () => {
    return(
    
         <View  style={styles.WatchMenuContainer}>   
           <Text style={styles.WatchMenuText}>Watch</Text>
           <View style={styles.WatchMenuContainer}>
           <FontAwesome5 
            name = "user-friends" 
            size = {20}
            color = "white"
            style={{marginRight : 15}}
            />
           <FontAwesome5 name="search" size ={20} style={{marginRight : 15,color :"white"}}/>
           </View>
         </View> 
    
    ) 
    
    }

const SecondBox = () => {
    return (
    
    <View  style={styles.WatchSuggestionsContainer}>
        <View style={styles.whatever}>
        <FlatList
        horizontal={true}
        data={suggestions}
        renderItem={({item}) =>
            <TouchableOpacity style={[styles.WatchSuggestions,{}]}> 
            <Text style={{fontFamily:"Roboto",fontSize: 14, fontWeight: "900",color: "white"}}>{item.Text}</Text>
      </TouchableOpacity> 
        }
        />
        </View>
    </View>
    
    )
}

export function WatchScreen() {
    return (
      <View style={{ flex : 1}}>
        <FirstBox/>
        <SecondBox/>
        <ThirdBox/>
      </View>
    )
}