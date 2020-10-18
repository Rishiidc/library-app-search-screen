import React from 'react';
import { Text , View, TextComponent, Image } from 'react-native';
export default class TransactionScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}>
                <View>
            <Image source = {require("../assets/booklogo.jpg")}
            style = {{width:200,height:200}}/>
            </View>
                 <Text>
                     This is a Transaction Screen.
                 </Text>
            </View>
        )
    }
}