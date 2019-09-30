import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { HomeScreen } from './src/screens/HomeScreen';

const App = () => (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <HomeScreen/>
    </ApplicationProvider>
);

export default App;