import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import menu from "../res/menu.png"
import cart from '../res/cart.jpg'
import user from '../res/Username.jpg'
export default function MenuBar(props){
    return(
        <View
            style={styles.menuBar}
        >
            <View style={{width: '10vw', height: '7vh'}}>
                <Image source={menu} style={styles.menuIcon}/>
            </View>
            <View style={{width: '50vw', height: '7vh', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Image source={cart} style={styles.menuIcon}/>
                <Image source={user} style={styles.menuIcon}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    menuIcon: {
        width: '5vw',
        height: '5vh',
        margin: '1.5vw'
    },
    menuBar: {
        width: '60vw',
        height: '8vh',
        backgroundColor: '#0f0',
        flexDirection: 'row'
    }
})