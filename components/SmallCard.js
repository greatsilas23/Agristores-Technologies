import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
export default function SmallCard(props){
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
        width: '14vw',
        height: '14vh',
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
        fontSize: '1.5vh'
    },
    content: {
        color: '#555',
        fontSize: '1.5vh'
    },
    image: {
        width: '10vw',
        height: '10vh'
    }
})