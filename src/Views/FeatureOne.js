import React from 'react';
import { Text, View } from 'react-native';
import { FeatureOneStyles as styles } from './styles';

const FeatureOne = ({ navigation }) => {
    return (
        <View style={styles.MainContainer}>
            <Text>FeatureOne</Text>
        </View>
    );
}


export default FeatureOne;