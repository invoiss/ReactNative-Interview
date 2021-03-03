import React from 'react';
import { Text, View } from 'react-native';
import { HomeScreenStyles as styles } from './styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.MainContainer}>
            <Text>HomeScreen</Text>
            <Text>Leave This Screen Empty</Text>
        </View>
    );
}


export default HomeScreen;