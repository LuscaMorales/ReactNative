import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, Image, TouchableOpacity, Platform} from "react-native";
import { css } from "../assets/css/Css";

export default function Login ({route})
{
    const[display, setDisplay] = useState('none');

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Image source={require('../assets/images/logo.png')}/>
            </View>
            <View>
                <Text style={css.login__msg(display)}>Usuario ou senha invalida</Text>
            </View>
            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder="Usuário"/>
                <TextInput style={css.login__input} placeholder="Senha" secureTextEntry={true}/>
                <TouchableOpacity style={css.login__button}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}