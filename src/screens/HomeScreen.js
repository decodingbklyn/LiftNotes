import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const {navigate} = navigation;
    return (
        <View>
            <Text style={ styles.header }>LiftNotes</Text>
            <Button 
                title="Log current section"
                onPress={()=> console.log("button pressed")}
                />
            <Button
                onPress={()=> navigate('List')}
                title="Lifting History"
                />
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000000',
        color: '#ffffff',
        textAlign: "center",
        fontSize: 50
    }
});

export default HomeScreen;