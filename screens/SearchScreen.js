import React from 'react';
import { Text , View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import * as permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner'
export default class SearchScreen extends React.Component{
    constructor(){
        super ()
        this.state={hascamerapermissions:null,scanned:false,scandata:'',buttonstate:'normal',scannedbookID:'',scannedstudentID:''}
    }
    getcamerapermission = async(ID) =>{
       const {status} = await permissions.askAsync(permissions.CAMERA)
       this.setState({
           hascamerapermissions:status==='granted',
        buttonstate:ID, 
        scanned:false
       })
    }
    handlebarcode = async ({type,data}) =>{
        this.setState({scanned:true,scandata:data,buttonstate:'normal'})
    }
    render(){
        const camerapermission = this.state.hascamerapermissions
        const scanned = this.state.scanned 
        const buttonstate = this.state.buttonstate
        if (
            buttonstate !== 'normal' && camerapermission === true
        ){
            return(
                <BarCodeScanner 
                onBarCodeScanned = {scanned?undefined:this.handlebarcode}/> 
            )
        }
        else if (buttonstate === 'normal'){
        return(
            <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}>
               <View>
            <Image source = {require("../assets/booklogo.jpg")}
            style = {{width:200,height:200}}/>
            </View>
            <View style = {styles.inputview}>
                <TextInput style = {styles.inputbox} placeholder = "bookID" value = {this.state.scannedbookID} onChangeText = {text => this.setState({scannedbookID:text})}>

                </TextInput>
                <TouchableOpacity style = {styles.scanbutton} onPress = {() => {this.getcamerapermission("bookID")}}>
                    <Text style = {styles.buttontext}>
                        scan 
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.inputview}>
                <TextInput style = {styles.inputbox} placeholder = "studentID" value = {this.state.scannedstudentID} onChangeText = {text => this.setState({scannedstudentID:text})}>

                </TextInput>
                <TouchableOpacity style = {styles.scanbutton} onPress = {() => {this.getcamerapermission("studentID")}}>
                    <Text style = {styles.buttontext}>
                        scan
                    </Text>
                </TouchableOpacity>
            </View>
                <TouchableOpacity style={{backgroundColor:"blue"}} onPress = {this.getcamerapermissionb}>
                   <Text>
                     Scan QR code.
                   </Text>
                </TouchableOpacity>
            </View>
        )
        }
    }
}
const styles = StyleSheet.create({
    scanbutton:{
        backgroundColor: 'green',
        padding:25,
        margin:10
    },
    buttontext:{
        fontSize: 15,
        textAlign: "center",
        marginTop: 10
    },
    inputview:{
        flexDirection: "row",
        margin: 20
    },
    inputbox: {width:200,height:40,borderWidth:1.5,fontSize:15}
    
})