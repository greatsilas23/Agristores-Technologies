import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
export default function Card(props){
    return(
        <View style={styles.card}>
            <Image
                source={props.itemImage}
                style={styles.image}
            />
            <Text style={styles.heading}>
                {props.itemHeading}
            </Text>
            <Text style={styles.content}>
                {props.itemDescription}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        width: '30vw',
        height: '35vh',
        backgroundColor: '#fff',
        borderRadius: '2vw',
        boxShadow: '2vw 2vw 2vw rgba(0,0,0, 0.5)',
        margin: '2vw',
        padding: '2vw',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        color: '#000',
        fontSize: '3vh'
    },
    content: {
        color: '#555',
        fontSize: '2vh'
    },
    image: {
        width: '25vw',
        height: '25vh'
    }
})