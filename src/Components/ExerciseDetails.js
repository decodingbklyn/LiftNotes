import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const ExerciseDetails = (props) => {
    return (
        <View style={ styles.containerStyles }>
            <Image 
                source={{uri: props.imgSrc}}
                style={{width: 150, height: 150}} />
            <View style={ styles.detailsStyles } >
                <Text style={ styles.workHeaderStyles }>{props.workOut}</Text>
                <Text>{props.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10
    }, 
    detailsStyles: {
        margin: 10,
        padding: 10,
        overflow: "scroll",
        maxWidth: "60%"
    }, 
    textStyles: {
        
    },
    workHeaderStyles: {
        fontSize: 20, 
        fontWeight: "600"
    }
})

export default ExerciseDetails