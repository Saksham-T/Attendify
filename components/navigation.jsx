import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// Placeholder screens for each tab
function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ChartScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Chart Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Chart') {
              iconName = 'analytics';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: 'transparent', // make the background transparent
            borderTopWidth: 0,
            position: 'absolute', // to position it on the bottom
            left: 0,
            right: 0,
            bottom: 0,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            color: 'white',
            marginBottom: 10,
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chart" component={ChartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
    bottom: 10,
    left: 0,
    right: 0,
    borderTopWidth: 0,
    borderRadius: 25,
    marginHorizontal: 20,
  },
  wave: {
    backgroundColor: 'rgba(121, 224, 238, 0.5)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
