import { View ,Animated } from "react-native";
import { useRef } from "react";

import { FirstBox } from "./FirstBox";
import { SecondBox } from "./SecondBox";

import React from 'react';



export function FirstPlusSecondBox({up,down}) {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    
    const goUp = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(fadeAnim, {
        toValue: -50,
        duration: 150,
        useNativeDriver: false
      }).start();
    };
    
    const goDown = () => {
      // Will change fadeAnim value to 0 in 3 seconds
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false
      }).start();
    };

    if(up) goUp();
    if(down) goDown();

    return (
         <Animated.View style={{top : fadeAnim }}>
            <FirstBox/>
            <SecondBox/>
         </Animated.View>
    );
}

