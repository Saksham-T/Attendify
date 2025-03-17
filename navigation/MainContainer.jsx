import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';
import { Image, Animated } from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';

// Screens
import ProfileScreen from './screens/ProfileStudent';
import DashboardScreen from './screens/HomeStudent.tsx';
import StatsScreen from './screens/StatsStudent.tsx';

//Screen names
const homeName = "Home";
const statsName = "Stats";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
       <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const scale = new Animated.Value(focused ? 1.2 : 1); // Initial scale value

          // Animation effect when the tab is focused
          Animated.timing(scale, {
            toValue: focused ? 1.2 : 1, // Scale-up on focus
            duration: 300, // Duration of animation in milliseconds
            useNativeDriver: true, // Use native driver for better performance
          }).start();

          let iconSource;
          if (route.name === homeName) {
            iconSource = focused
              ? require('C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/assets/home-active.png') // Example custom icon
              : require('C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/assets/home-inactive.png'); // Example custom icon
          } else if (route.name === statsName) {
            iconSource = focused
              ? require('C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/assets/stats-active.png') // Example custom icon
              : require('C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/assets/stats-inactive.png'); // Example custom icon
          } else if (route.name === profileName) {
            iconSource = focused
              ? require('C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/assets/profile-active.png') // Example custom icon
              : require('C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/assets/profile-inactive.png'); // Example custom icon
          }

          return (
            <Animated.Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                tintColor: 'white',
                transform: [{ scale }], // Apply the animation scale effect
              }}
            />
          );
        },
        tabBarLabel: () => null, // Removes the text label completely
        tabBarBackground: () => (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#161697', '#9747FF']} // Gradient colors
            style={{ flex: 1 }}
          />
        ),
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: { padding: 10, height: 80 },
      }}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBar: {
      backgroundColor: 'transparent',
      height: 60,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderTopWidth: 0,
      borderRadius: 25,
      marginHorizontal: 20,
    },
  });
  
export default MainContainer;