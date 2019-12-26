import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const {navigate} = navigation;
    return (
        <View>
            <Button 
                title="Log current section"
                onPress={()=> navigate('Session')}
                />
            <Button
                onPress={()=> navigate('List')}
                title="Workouts"
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