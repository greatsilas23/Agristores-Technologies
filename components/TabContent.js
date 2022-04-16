import React from 'react'
import {View, TextInput, Text, StyleSheet, Image, Button} from 'react-native'
import icon from '../res/icon.png'
export default function TabContent(props){
    return(
        <View style={styles.tabContentBackground}>
            <View style={styles.tabContent}>
                <Image style={styles.formIcon} source={icon}/>
                <Text>{props.itemContent}</Text>
                <Text>{props.itemFieldOne}</Text>
                <TextInput placeholder="enter text"/>
                <Text>{props.itemFieldTwo}</Text>
                <TextInput placeholder="enter text" />
                <Button title="add"></Button>
                <Button title="clear"></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    tabContentBackground: {
        width: '60vw',
        height: '40vh',
        backgroundColor: '#0f0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabContent: {
        width: '50vw',
        height: '40vh',
        backgroundColor: '#fff',
        borderRadius: '3vw',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formIcon: {
        width: '10vw',
        height: '10vh'
    }
})