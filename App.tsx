import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './src/Navigation/Navigation';


const App = () => {
    return (
        <NavigationContainer>
            <MainTabScreen />
        </NavigationContainer>
    );

}
export default App;



