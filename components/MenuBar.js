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
const invert = (color) => {
          color = color.replace('rgb(', '');
          color = color.replace(')', '');
          color = color.replace('rgba(', '');
          let colors = color.split(',');
          let r = colors[0].replace(' ', '');
          let g = colors[1].replace(' ', '');
          let b = colors[2].replace(' ', '');
          let a = (colors.length > 3) ? colors[3].replace(' ', '') : 1;
          r = ~r & 255;
          g = ~g & 255;
          b = ~b & 255;
          return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
    }
const styles = StyleSheet.create({
    menuIcon: {
        width: '10vw',
        height: '10vh',
        margin: '1.5vw',
        backgroundColor: '#060',
        borderRadius: '5vw'
    },
    menuBar: {
        width: '60vw',
        height: '13vh',
        backgroundColor: '#060',
        flexDirection: 'row'
    }
})