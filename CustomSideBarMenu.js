import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import WelcomeScreen from '../screens/WelcomeScreen';
export default class CustomSideBarMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems {...this.props}/>
                    <View style={{flex: 1,justifyContent:'flex-end',paddingBottom:30}}>
                        <TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%'}}
                        onPress={()=>{
                            this.props.navigation.navigate('WelcomeScreen')
                            firebase.auth().signOut()
                        }}>
                            <Text>LogOut</Text>    
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
      flex: 1
    },
    upperContainer: {
      flex: 0.8,
      paddingTop: 30
    },
});