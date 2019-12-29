import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Picker, Header } from 'react-native';

const Timer = (props) => {
    const [time, setTime ] = useState(0)
    const [startTimer, setStartTimer ] = useState(false)
    const [stopTimer, setStopTimer ] = useState(false)
    const [stopTime, setStopTime] = useState('')

    let count = 0

    function start(stopTime){
        let timerInterval =  setInterval( ()=> {
            setTime( count++ )
            if( count == Number.parseInt(stopTime)+1) {
                return clearInterval(timerInterval)
            }
        }, 1000 )
        console.log('start: '+  startTimer,'stop: ' + stopTimer)
    }

    function stop(){
        console.log('stopped')
        setTime(count)
    }

    function reset() {
        console.log('reset')
        setStartTimer( false )
        setStopTimer( false )
        setTime(count = 0)
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
                <Picker.Item label={"30"} value={"30"}/>
                <Picker.Item label={"60"} value={"60"}/>
                <Picker.Item label={"90"} value={"90"}/>
                <Picker.Item label={"120"} value={"120"}/>
            </Picker>
            <View style={styles.buttonContainter}>
                <TouchableOpacity
                    onPress={()=> {
                        setStartTimer(true)
                        start(stopTime)
                    } } 
                    style={ styles.startButtonStyles }
                >
                    <Text style={ styles.buttonTextStyles }>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> {
                        setStopTimer( true )
                        stop()
                    } }
                    style={ styles.stopButtonStyles }
                >
                    <Text style={ styles.buttonTextStyles }>Stop</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> reset() }
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
