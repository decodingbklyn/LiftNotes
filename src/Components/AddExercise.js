import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import ExerciseDetails from './ExerciseDetails'

const AddExercise = () => {
    const [ exerciseInput, setExerciseInput ] = useState('')
    const [ exerciseImgInput, setExerciseImgInput ] =useState('')
    const [ exerciseDescrInput, setExerciseDescrInput ] = useState('')
    
    function makeExercisePreview() {
        if ( exerciseInput && exerciseImgInput && exerciseDescrInput ) {
            return  (<ExerciseDetails workOut={ exerciseInput } descr={ exerciseDescrInput } imgSrc={ exerciseImgInput } />)
        }
    }

    return (
        <View style={ styles.addWorkContainerStyles }>
            <View>
                <Text>Enter An Exercise</Text>
                <TextInput 
                    style={{ maxHeight: 100, height: "100%", width: "100%", borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={ text => setExerciseInput(text)}
                    value={exerciseInput}
                    clearTextOnFocus
                />
                <Text>Enter A Link For Your Workout Image Or Video</Text>
                <TextInput 
                    style={{ maxHeight: 100, height: "100%", width: "100%", borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={ text => setExerciseImgInput(text)}
                    value={exerciseImgInput}
                    clearTextOnFocus
                />
                <Text>Enter A Description For The Work Out</Text>
                <TextInput 
                    style={{ maxHeight: 100, height: "100%", width: "100%", borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={ text => setExerciseDescrInput(text)}
                    value={exerciseDescrInput}
                    clearTextOnFocus
                />
                <TouchableOpacity 
                    style={ styles.buttonStyles }
                    onPress={ () => console.log("Saved New Exercise")}
                    >
                    <Text style={ styles.buttonTextStyles}>Save</Text>
                </TouchableOpacity>
                <Text>Preview New Exercise: </Text>
                { makeExercisePreview() }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addWorkContainerStyles: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    buttonStyles: {
        backgroundColor: '#000080',
        margin: 10,
        borderRadius: 100
    }, 
    buttonTextStyles: {
        color: '#fff',
        fontSize: 25,
        textAlign: "center"
    }
})

export default AddExercise