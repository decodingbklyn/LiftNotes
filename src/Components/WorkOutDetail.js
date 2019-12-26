import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const WorkoutDetail = (props) => {
    console.log(props)
    return (
        <View>
            <Image 
                source={{uri: props.imgSrc}}
                style={{width: 150, height: 150}} />
            <Text>{props.workOut}</Text>
            <Text>{props.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default WorkoutDetail