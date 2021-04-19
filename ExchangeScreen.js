import React, { Component } from 'react';
import {View,Text,TextInput,KeyboardAvoidingView,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class ExchangeScreen extends Component {
    constructor(){
        super();
        this.state ={
            userId: firebase.auth().currentUser.email,
            itemName: '',
            reasonToExchange: ''
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7);
    }
    addRequest=(itemName,reasonToExchange)=>{
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection('requested_books').add({
            "userId":userId,
            "item_name":itemName,
            "reason_To_Exchange":reasonToExchange,
            "request_id":randomRequestId,
        })
        this.setState({
            itemName:'',
            reasonToExchange:'',
        })
    }
    render(){
        return (
            <View style={{flex:1}}>
                <MyHeader title="Exchange Items" />
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput 
                        style={styles.formTextInput}
                        placeholder={"Enter Item Name"}
                        onChangeText={(text)=>{
                            this.setState({
                                itemName: text
                            })
                        }}
                        value={this.state.itemName} />
                        <TextInput 
                        style={styles.formTextInput}
                        placeholder={"Why do you need to Exchange"}
                        onChangeText={(text)=>{
                            this.setState({
                                reasonToExchange: text
                            })
                        }}
                        value={this.state.reasonToExchange} />
                <TouchableOpacity style={styles.button}
                onPress={()=>{}}>
                <Text>Request</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    formTextInput:{
        width:'75%',
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
    },
    button: {
        width:'75%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#ff5722',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:8,
        },
        shadowopacity: 0.44,
        shadowRadius:10.32,
        elevation:16,
        marginTop:20
    }
})