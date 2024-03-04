import React from "react";
import { Text, View } from "react-native";

export default function Rastreio ({route})
{
    return(
        <View>
            <Text>Esse é o componete Rastreio do sistema {route.params.id} </Text>
        </View>
    )
}