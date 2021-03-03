import React from 'react';
import { Text, View } from 'react-native';
import { FeatureTwoStyles as styles } from './styles';

const FeatureTwo = ({ navigation }) => {
    return (
        <View style={styles.MainContainer}>
            <Text>FeatureTwo</Text>
        </View>
    );
}


export default FeatureTwo;