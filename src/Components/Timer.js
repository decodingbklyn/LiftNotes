import React, { useReducer } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Picker, Header } from 'react-native';
    //timer state reducer
const reducer = (state, action) => {
    //state === {start: num , stop: 0, reset}
    switch
}

const Timer = (props) => {


    const timerFunctiontionality = {
        start: ()=> {

        }, 
        stop: ()=> {
            
        }, 
        reset: () => clearTimeout()
    }


    return (
        <View>
            <Text>Timer:</Text>
            <Text style={ styles.timerView }>
                { time }
            </Text>
            <Text>Rest between sets</Text>
            <Picker
                selectedValue={stopTime}
                value={stopTime}
                onValueChange={(itemValue, itemIndex) => setStopTime(itemValue)}
            >
                <Picker.Item label={"30"} value={30}/>
                <Picker.Item label={"60"} value={60}/>
                <Picker.Item label={"90"} value={90}/>
                <Picker.Item label={"120"} value={120}/>
            </Picker>
            <View style={styles.buttonContainter}>
                <TouchableOpacity
                    onPress={()=> } 
                    style={ styles.startButtonStyles }
                >
                    <Text style={ styles.buttonTextStyles }>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> {
                       
                    } }
                    style={ styles.stopButtonStyles }
                >
                    <Text style={ styles.buttonTextStyles }>Stop</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> }
                    style={ styles.resetButtonStyles }
                >
                    <Text style={ styles.buttonTextStyles }>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    startButtonStyles: {
        backgroundColor: 'green',
        maxWidth: '33%',
        width: 100,
        maxHeight: 100,
        height: 100
    },
    stopButtonStyles: {
        backgroundColor: 'red',
        maxWidth: '33%',
        width: 100,
        maxHeight: 100,
        height: 100
    },
    resetButtonStyles: {
        backgroundColor: 'gray',
        maxWidth: '33%',
        width: 100,
        maxHeight: 100,
        height: 100
    },
    buttonTextStyles: {
        color: '#fff', 
        fontSize: 20, 
        fontWeight: '700',
        textAlign: 'center'
    }, 
    buttonContainter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    timerView: {
        textAlign: 'center',
        fontSize: 60,
        fontWeight: '800'
    }
})

export default Timer
