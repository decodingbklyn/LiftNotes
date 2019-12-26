import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const WorkOutSessionScreen = () => {
    const [ workOut, setWorkOut ] = useState('Enter work out')

    return (
        <View>
            <Text style={ styles.headerStyles }>Work Out Session Log</Text>
            <Text  style={ styles.subHeaderStyles }>Workout: </Text>
            <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={ text => setWorkOut(text)}
                value={workOut}
                clearTextOnFocus
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyles: {
        fontSize: 50,
        backgroundColor: '#000',
        color: '#fff'
    },
    subHeaderStyles: {
        fontSize: 30,
        fontWeight: "600"
    }
})

export default WorkOutSessionScreen