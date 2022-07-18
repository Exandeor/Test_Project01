import React from 'react';
import { Image, TouchableOpacity, View, Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

function Person() {
    return (
        
        <View  style={styles.profileContainer}>
            <View style={styles.liner}>
                <TouchableOpacity style={styles.dynamicHeight}>
                    <Image 
                       style={styles.profilePicture} 
                       source={require('../assets/logo.jpg')}
                    />
                </TouchableOpacity>
                <Text style={styles.GroupName}>
                    HONKAI IMPACT 3 INTERNATIONAL DISCUSSION GROUP
                </Text>
                <TouchableOpacity style={styles.dynamicHeight}>
                   <MaterialCommunityIcons 
                       name="dots-horizontal" 
                       size={30} 
                       style={{marginLeft:5}}
                       color="silver"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.dynamicHeight}>
                   <FontAwesome 
                       name="remove" 
                       size={25} 
                       style={{marginLeft:15}}
                       color="silver"
                    />
                </TouchableOpacity>
            </View>
        </View>
 
    )
}

function WrittenText() {
    return(

            <Text style={styles.postText}>
                "The way I go through with red roses burn my eyes.
                Cold rain starts pouring hard,I've been called upon.
                Never let you go.
                That's why I did them all.
                For a chance at least to live in your way....
                Love of you,is my most cherished thing,so stay alive bravely."
                - Final Lesson
            </Text>
   
    )

}

function Action() {

    return(
        <View style={styles.actionContainer}>
            <TouchableOpacity
               style={styles.reactIcons}
               onPress={() => console.log("Like")}
            >
                <FontAwesome name="thumbs-o-up" size={20} color="grey"/>
                <Text 
                    style={{marginHorizontal:3,fontFamily:"sans-serif",color: "silver"}}
                >Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactIcons}>
                <MaterialCommunityIcons name="comment-outline" size={20} color="grey"/>
                <Text 
                    style={{marginHorizontal:3,fontFamily:"sans-serif",color: "silver"}}
                >Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactIcons}>
                <MaterialCommunityIcons name="share-outline" size={20} color="grey"/>
                <Text 
                    style={{marginHorizontal:3,fontFamily:"sans-serif",color: "silver"}}
                >Share</Text>
            </TouchableOpacity>
        </View>
    )
}

export function Post() {
    return (
        <View style={styles.post}>
            <View style={styles.profileContainer}><Person/></View>
            <View style={styles.textContainer}><WrittenText/></View>
            <View style={styles.imageContainer}>
               <Image
                  style={styles.image}
                  source={require('../assets/main.jpg')}
                />
            </View>
            <Action/>
         </View>
     
 )
}
