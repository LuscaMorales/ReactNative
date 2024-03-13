import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, Image, TouchableOpacity, Platform} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from "../assets/css/Css";

export default function Login ({navigation})
{
    const[display, setDisplay] = useState('none');
    const[user, setUser] = useState(null);
    const[password, setPassword] = useState(null);
    const[login, setLogin] = useState(null);

    //envio do formulario
    async function sendForm(){
        let response=await fetch('http://192.168.1.15:3000/login',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: user,
              password: password
            }),
        });
        let json=await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            }, 5000);
            await AsyncStorage.clear();
        }else{
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('AreaRestrita');
        }
    }

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Image source={require('../assets/images/logo.png')}/>
            </View>
            <View>
                <Text style={css.login__msg(display)}>Usuario ou senha invalida</Text>
            </View>
            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder="Usuário" onChangeText={text=>setUser(text)}/>
                <TextInput style={css.login__input} placeholder="Senha" onChangeText={text=>setPassword(text)} secureTextEntry={true}/>
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}