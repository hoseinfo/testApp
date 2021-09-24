

import React from 'react';


import LoginPage from './screens/LoginPage';
import MainPage from './screens/MainPage';
import Details from './screens/Details';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();
const App=() => {
 

  return (
   

<NavigationContainer>
      <Stack.Navigator >
        
        <Stack.Screen options={{ title: '',headerShown: false }}  name="LoginPage" component={LoginPage}></Stack.Screen>
        <Stack.Screen options={{ title: '',headerShown: false }}  name="MainPage" component={MainPage}></Stack.Screen>
        <Stack.Screen options={{ title: '' }}  name="Details" component={Details}></Stack.Screen>

         
      </Stack.Navigator>
    </NavigationContainer>
   
   
  );
};



export default App;
