import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainContainer from 'C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/navigation/MainContainer.jsx';
import AdminContainer from 'C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/navigation/AdminContainer.jsx';

// Importing Screens
import HomeScreen from './navigation/screens/HomeScreen.jsx';
import LoginScreen from './navigation/screens/LoginScreen.jsx';
import SignUpScreen from './navigation/screens/SignUpScreen.jsx';
import DashboardScreen from './navigation/screens/HomeStudent.tsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Authentication and onboarding screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="homeStudent" component={DashboardScreen} />

        {/* MainContainer for bottom navigation */}
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="AdminContainer" component={AdminContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
