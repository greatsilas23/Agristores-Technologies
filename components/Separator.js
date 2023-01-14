import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default function Separator(props){
    return(
        <View style={styles.container}>
            <Text style={styles.separatorText}>
                {props.separatorText}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '60vw',
        height: '10vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    separatorText: {
        fontSize: '4vw'
    }
})