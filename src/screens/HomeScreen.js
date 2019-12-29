import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBlog, faList, faDumbbell, faHeartbeat, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import AdBanner from '../Components/AdBanner'

const HomeScreen = ({ navigation }) => {
    const { navigate } = navigation;

    return (
        <View style={ styles.containerStyles}>
            <TouchableOpacity
                onPress={()=> navigate('Log')}
                style={ styles.buttonStyles }
                >
                <Text style={ styles.textButtonStyles }>Log Current LiftNotes</Text>
                <FontAwesomeIcon icon={ faList } style={ styles.iconStyles }  size={40}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> navigate('EList')}
                style={ styles.buttonStyles }
                >
                <Text style={ styles.textButtonStyles }>Exercises</Text>
                <FontAwesomeIcon icon={ faDumbbell } style={ styles.iconStyles }  size={40}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> navigate('WList')}
                style={ styles.buttonStyles }
            >
                <Text style={ styles.textButtonStyles }>Work Outs</Text>
                <FontAwesomeIcon icon={ faHeartbeat } style={ styles.iconStyles }  size={40}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> navigate('Blog')}
                style={ styles.buttonStyles }
            >
                <Text style={ styles.textButtonStyles }>LiftNotes Blog</Text>
                <FontAwesomeIcon icon={ faBlog } style={ styles.iconStyles } size={40} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> navigate('Timer')}
                style={ styles.buttonStyles }
            >
                <Text  style={ styles.textButtonStyles }>Timer</Text>
                <FontAwesomeIcon icon={ faStopwatch } style={ styles.iconStyles }/>
            </TouchableOpacity>
            <TouchableOpacity
                // onPress={()=> navigate('Timer')}
                style={ styles.buttonStyles }
            >
                <Text  style={ styles.textButtonStyles }>Pending</Text>
                <FontAwesomeIcon icon={ faStopwatch } style={ styles.iconStyles }/>
            </TouchableOpacity>
            <AdBanner style={ styles.adBannerStyles }/>
        </View>
    )
};

const styles = StyleSheet.create({
    iconStyles: {
        color: '#ffffff',
        textAlign: "center",
        margin: 15,
        padding: 20, 
    }, 
    buttonStyles: {
        backgroundColor: '#000080',
        margin: 15,
        padding: 20, 
        maxWidth: "40%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: "auto"
    },
    textButtonStyles: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: "700",
        fontSize: 20,
        height: "100%",
        justifyContent: "center",
        maxHeight: 100,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: "auto"
    },
    containerStyles: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "100%"
    },
    adBannerStyles: {
        position: "absolute",
        bottom: 0
    }
});

export default HomeScreen;