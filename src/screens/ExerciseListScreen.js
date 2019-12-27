import React, {useState} from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import ExerciseDetails from '../Components/ExerciseDetails';
import AddExerciseDetails from '../Components/AddExercise';
import Data from '../data.json';

const ExerciseListScreen = (props) => {
    const [ exercise, setExercise ] = useState([...Data])
    const [addIsTrue, setAddIsTrue ] = useState(false)
    
    function AddExercise(addState){
        console.log(addState)
        if ( addState ) {
            return <AddExerciseDetails />
        }
    }

    return(
        <View>
            <TouchableOpacity 
                style={ styles.buttonStyles }
                onPress={() => setAddIsTrue(true) }
                >
                <Text style={ styles.buttonTopStyles }>Add An Exercise</Text>
                <Text style={ styles.textStyles }>+</Text>
            </TouchableOpacity>
            { AddExercise( addIsTrue ) }
            <Text style={ styles.screenHeaderStyles }>Exercises:</Text>
            <FlatList 
                data={ exercise }
                keyExtractor={(item) => item.workOut}
                renderItem={ ({ item }) =>  <ExerciseDetails workOut={item.workOut} imgSrc={item.imgSrc} description={item.description}/> }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyles: {
        backgroundColor: '#000080',
        width: '100%',
    },
    buttonTopStyles: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '700',
        width: "100%",
        textAlign: "center"
    },
    screenHeaderStyles: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: 'center'
    }, 
    textStyles: {
        color: '#fff',
        fontSize: 50,
        fontWeight: '600',
        width: "100%",
        textAlign: "center"
    }, 
})
export default ExerciseListScreen