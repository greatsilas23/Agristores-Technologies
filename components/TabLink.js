import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default function TabLink(props){
    return(
        <View style={styles.tabLink}>
            <Text style={styles.content}>{props.itemContent}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    tabLink: {
        height: '8vh',
        width: '20vw',
        backgroundColor: '#0f0'
    },
    content: {
        fontSize: '4vh',
        color: '#000'
    }
})