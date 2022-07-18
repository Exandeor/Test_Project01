import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity} from "react-native";
import * as Yup from 'yup';
import { Formik } from "formik";

import { styles } from "./styles";

export function LoginScreen({navigation}) {



    return (
        <View style={styles.background}>
           <View style = {styles.logoContainer}>
           <Image 
                 source ={require('../assets/FacebookLogin.png')}
                 style  = {styles.logo}
           />
            </View>
           <View style={styles.formContainer}>
              <Formik
                initialValues={{email : "" ,password : ""} }
                onSubmit={ text => alert(text)}

              >
                {({handleChange,handleSubmit}) => ( 
                    <>
                        <TextInput 
                           style = {styles.emailInput}
                           placeholder = "Email or Phone"
                           autoCapitalize = "none"
                           autoCorrect = {false}
                           keyboardType = 'email-address'
                           textContentType = 'emailAddress'
                           onChangeText ={handleChange("email")}
                        />
                        <TextInput 
                           style = {styles.passwordInput}
                           placeholder = "Password"
                           keyboardType= 'numeric'
                           autoCapitalize = "none"
                           autoCorrect = {false}
                           secureTextEntry
                           textContentType = "password"
                           onChangeText={handleChange("password")}
             
                        />
                        <TouchableOpacity 
                           style={styles.loginButton}
                           onPress={ () =>  { handleSubmit();navigation.navigate('MainScreen') }}
                   
                        >
                            <Text style = {{color:"white",fontSize:15}}>Log In</Text>
                         </TouchableOpacity>                  
                    </>
                )}
              </Formik>

           </View>
           <View style = {styles.bottomTextContainer}>
            <Text style = {styles.bottomText}>
                Sign Up for Facebook
            </Text>
           </View>
           </View> 
     
    )
} 
