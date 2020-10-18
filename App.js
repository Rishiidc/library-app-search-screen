import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import TransactionScreen from './screens/TransactionScreen'
import SearchScreen from './screens/SearchScreen'
import HomeScreen from './screens/HomeScreen'
export default class App extends React.Component  {
   render() {
     return(
        <AppContainer/>
     )
   }
}
const LibraryScreen = createBottomTabNavigator (
  {
    Transaction:{screen:TransactionScreen},
    Search:{screen:SearchScreen},
    Home:{screen:HomeScreen}
    
  }
  ,{
    defaultNavigationOptions:({navigation}) =>({
      tabBarIcon:() =>{
        const routename = navigation.state.routeName 
        if (
          routename === "Transaction"
        )
      {
        return (
          <Image source = {require("./assets/book.png")}
          style = {{width:40,height:40}}/>
        )
      }
      else if (routename === "Search"){
        return (
          <Image source ={require("./assets/searchingbook.png")}
          style = {{width:40,height:40}}/>

        )
      }
      else if (routename === "Home"){
        return (
          <Image source = {require("./assets/homescreen.png")}
          style = {{width:40,height:40}}/>
        )
      }
      }
    })
  }
)
const AppContainer = createAppContainer(LibraryScreen)