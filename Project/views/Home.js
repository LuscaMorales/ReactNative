import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { css } from "../assets/css/Css";

export default function Home ({navigation})
{
    return(
        <View style= {css.container2}>
            <TouchableOpacity style={css.button__home} onPress={()=> navigation.navigate('Login')}>
                <Image source={require('../assets/images/button-target2.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={css.button__home} onPress={()=> navigation.navigate('Rastreio')}>
                <Image source={require('../assets/images/button-truck2.png')}/>
            </TouchableOpacity>
        </View>
    )
}