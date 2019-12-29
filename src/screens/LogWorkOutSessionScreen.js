import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Picker, FlatList } from 'react-native'
import Data from '../data.json'

const LogWorkOutSessionScreen = () => {
    //State for sessions
    const [ workOut, setWorkOut ] = useState('')
    const [ exerciseList, setExerciseList ] = useState(Data)
    const [ saveExercise, setSaveExercise ] = useState('')
    const [ saveSets, setSaveSets ] = useState('')
    const [ saveReps, setSaveReps ] = useState('')
    const [ saveRest, setSaveRest ] = useState('')

    //List of exercise names 
    const list = exerciseList.map( ( item ) => {
        return <Picker.Item label={ item.workOut } key={ item.workOut } value={ item.workOut } />
    })


    return (
        <View>
            <Text style={ styles.headerStyles }>Log Your Lift Session</Text>
            <Text  style={ styles.subHeaderStyles }>Workout: </Text>
            <Text>Select A Body Region:</Text>
            <Picker
                selectedValue={workOut}
                value={workOut}
                onValueChange={(itemValue, itemIndex) => setWorkOut(itemValue)}
            >
                <Picker.Item label="Upper Body" value="upper" />
                <Picker.Item label="Lower Body" value="lower" />
                <Picker.Item label="Mixed Body" value="mixed" />
                <Picker.Item label="Cardio" value="cardio" />
            </Picker>
            <Text>Select A Exercise:</Text>
            <Picker
                selectedValue={saveExercise}
                value={saveExercise}
                onValueChange={(itemValue, itemIndex) => setSaveExercise(itemValue)}
            >
                { list }
            </Picker>
            <Text>Select a Number of Sets:</Text>
            <Picker
                selectedValue={saveSets}
                value={saveSets}
                onValueChange={(itemValue, itemIndex) => setSaveSets(itemValue)}
            >
                <Picker.Item label={ "1" } value={ "1" } />
                <Picker.Item label={ "2" } value={ "2" } />
                <Picker.Item label={ "3" } value={ "3" } />
                <Picker.Item label={ "4" } value={ "4" } />
                <Picker.Item label={ "5" } value={ "5" } />
            </Picker>
            <Text>Select a Number of Reps:</Text>
            <Picker
                selectedValue={saveReps}
                value={saveReps}
                onValueChange={(itemValue, itemIndex) => setSaveReps(itemValue)}
            >
                <Picker.Item label={ "1" } value={ "1" } />
                <Picker.Item label={ "2" } value={ "2" } />
                <Picker.Item label={ "3" } value={ "3" } />
                <Picker.Item label={ "4" } value={ "4" } />
                <Picker.Item label={ "5" } value={ "5" } />
                <Picker.Item label={ "6" } value={ "6" } />
                <Picker.Item label={ "7" } value={ "7" } />
                <Picker.Item label={ "8" } value={ "8" } />
                <Picker.Item label={ "9" } value={ "9" } />
                <Picker.Item label={ "10" } value={ "10" } />
                <Picker.Item label={ "11" } value={ "11" } />
                <Picker.Item label={ "12" } value={ "12" } />
                <Picker.Item label={ "13" } value={ "13" } />
                <Picker.Item label={ "14" } value={ "14" } />
                <Picker.Item label={ "15" } value={ "15" } />
                <Picker.Item label={ "16" } value={ "16" } />
                <Picker.Item label={ "17" } value={ "17" } />
                <Picker.Item label={ "18" } value={ "18" } />
                <Picker.Item label={ "19" } value={ "19" } />
                <Picker.Item label={ "20" } value={ "20" } />
            </Picker>
            <Text>Rest Between Sets:</Text>
            <Picker
                selectedValue={saveRest}
                value={saveRest}
                onValueChange={(itemValue, itemIndex) => setSaveRest(itemValue)}
            >
                <Picker.Item label={ "30" } value={ "30" } />
                <Picker.Item label={ "60" } value={ "60" } />
                <Picker.Item label={ "90" } value={ "90" } />
                <Picker.Item label={ "120" } value={ "120" } />
            </Picker>
            <Text>Notes</Text>
            <TextInput 
                style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={ text => setWorkOut(text)}
                clearTextOnFocus
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyles: {
        fontSize: 35,
        backgroundColor: '#000080',
        color: '#fff',
        fontWeight: "700",
        textAlign: "center"
    },
    subHeaderStyles: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center"
    }
})

export default LogWorkOutSessionScreen