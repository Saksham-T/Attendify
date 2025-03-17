import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ListRenderItem, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import MainContainer from './navigation/MainContainer';
enableScreens();
// import { LineChart } from 'react-native-chart-kit';
// import DashboardScreen from 'C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/components/home.jsx'
import PieChart from 'react-native-pie-chart';
import { G, Circle, Text as SvgText } from 'react-native-svg';

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Placeholder for image */}

      {/* Title and subtitle */}
      <Text style={styles.title}>Attendify</Text>
      <Text style={styles.subtitle}>Snap your Attendance now.</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.loginbtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupbtn} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <Image 
        source={require('C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/assets/nitg.png')}
        style={{ width: 400, height: 400, borderRadius: 0 }} 
      />
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={ {fontSize: 38,
    fontWeight: 'bold',
    color: '#2B4EFF', marginTop:130}}>
      Welcome to NITG</Text>
      <Text style={styles.subtitle}>Snap your Attendance now.</Text>

      {/* Placeholder for Google button */}

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#666"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
      />

      <Text style={styles.forgotPassword}>Forgot Password</Text>

      {/* Login and Admin Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('homeStudent')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>

      {/* Placeholder for image */}
      <Image 
        source={require('C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/assets/login.png')}
        style={{ width: 250, height:250, }} 
      />
    </View>
  );
}

function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={ {fontSize: 38,
    fontWeight: 'bold',
    color: '#2B4EFF', marginTop:130}}>
      Welcome to NITG</Text>
      <Text style={[styles.subtitle, {marginBottom:30}]}>Let's get you started</Text>

      {/* Placeholder for Google button */}

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#666"
      />

      {/* Roll Input */}
      <TextInput
        style={styles.input}
        placeholder="Roll Number"
        placeholderTextColor="#666"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#666"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
      />

      {/* Password Verify */}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#666"
        secureTextEntry
      />

      {/* Login and Admin Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Placeholder for image */}
      <Image 
        source={require('C:/Users/thaku/OneDrive/Desktop/Attendify/Collectify/assets/signup.png')}
        style={{ width: 250, height:220, }} 
      />
    </View>
  );
}

interface EventItem {
  id: string;
  titleh1: string;
  date: string;
  description: string;
}

interface DonutChartProps {
  percentage: number;
  subject: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ percentage, subject }) => {
  const widthAndHeight = 250
  const data = percentage
    ? [
        { value: percentage, svg: { fill: '#9747FF' }, key: 'slice-1' },
        { value: 100 - percentage, svg: { fill: '#79E0EE' }, key: 'slice-2' },
      ]
    : [];
  const valuesArray = data.map(item => item.value);
  const fillColorsArray = data.map(item => item.svg.fill);
  const CustomCenterLabel: React.FC = () => (
    <G key="center-label">
      <Circle cx="50%" cy="50%" r={50} fill="white" />
      <SvgText
        x="50%"
        y="45%"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="#4CAF50"
      >
        {`${percentage}%`}
      </SvgText>
      <SvgText
        x="50%"
        y="60%"
        textAnchor="middle"
        fontSize="12"
        fontWeight="500"
        fill="#000"
      >
        {subject}
      </SvgText>
    </G>
  );

  return (
    <View style={styles.chartContainer}>
      <PieChart
        style={styles.chart}
        widthAndHeight={widthAndHeight}
        series={valuesArray}
        sliceColor={fillColorsArray}
        coverRadius={0.45}
        coverFill={'#FFF'}
      />
      
      {/* Custom label positioned on top of the PieChart */}
      <View style={styles.centerLabel}>
        <Text style={styles.percentageLabel}>{`${percentage}%`}</Text>
        <Text style={styles.subjectLabel}>{subject}</Text>
      </View>
    </View>
  );
};

function DashboardScreen() {



  const [calendarData, setCalendarData] = useState<EventItem[]>([
    { id: '1', titleh1: 'Culturals', date: '16/09/2023', description: 'For 3rd and 4th year Students' },
    { id: '2', titleh1: 'Prize Distribution', date: '09/10/2023', description: 'Winning and participating students' },
  ]);

  const loadMoreData = () => {
    const newEvent: EventItem = {
      id: Math.random().toString(),
      titleh1: 'New Event',
      date: '01/01/2024',
      description: 'This is a sample event.',
    };
    setCalendarData([...calendarData, newEvent]);
  };

  const renderEventItem: ListRenderItem<EventItem> = ({ item }) => (
    <View style={styles.eventCardh1}>
      <Text style={styles.eventTitle}>{item.titleh1}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
      <Text style={styles.eventDate}>{item.date}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.containerh1}>
      <View style={styles.headerh1}>
        <Text style={styles.titleh1}>Today Class</Text>
        <View style={styles.classCard}>
          <Text>Information Theory and Coding</Text>
          <Text>9:00 - 9:50 AM</Text>
        </View>
        <View style={styles.classCard}>
          <Text>VLSI</Text>
          <Text>10:00 - 10:50 AM</Text>
        </View>
      </View>

      <View style={styles.attendanceh1}>
        <Text style={styles.titleh1}>Attendance</Text>
        <ScrollView horizontal contentContainerStyle={styles.donutContainer}>
          <DonutChart percentage={71} subject="EC401" />
          <DonutChart percentage={84} subject="EC402" />
          <DonutChart percentage={71} subject="EC403" />
          <DonutChart percentage={92} subject="EC404" />
          <DonutChart percentage={84} subject="HS400" />
          <DonutChart percentage={77} subject="EC406" />
        </ScrollView>
      </View>

      <View style={styles.upcoming}>
        <Text style={styles.titleh1}>Upcoming Schedules</Text>
        <FlatList
          data={calendarData}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id}
          // onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
        />
      </View>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="homeStudent" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  imagePlaceholder: {
    height: 200,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 20,
  },
  imageText: {
    color: '#999',
    fontSize: 14,
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#2B4EFF',
    marginBottom:0,
    marginTop: 60,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 60,
  },
  loginbtn: {
    backgroundColor: '#2B4EFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width:150,
  },
  signupbtn: {
    backgroundColor: '#2B4EFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    marginBottom: 80,
    width:150,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
  },
  input: {
    backgroundColor: '#EAEAEA',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    width: '85%',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#2B4EFF',
    marginBottom: 20,
  },
  loginimg: {
    height: 150,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 30,
  },
  button: {
    backgroundColor: '#2B4EFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width:150,
  },
// home1
containerh1: { flex: 1, padding: 10 },
headerh1: { marginBottom: 20 },
titleh1: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
classCard: { backgroundColor: '#e0f7fa', padding: 10, marginVertical: 5, borderRadius: 5 },
attendanceh1: { marginVertical: 20 },
donutContainer: {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginVertical:10,
  backgroundColor: 'rgba(121, 224, 238, 0.3)',
  padding: 10,
  borderRadius: 50,
},
chart: {
  height: 150,
  width: 150,
  marginHorizontal:30,
  paddingHorizontal: 60,
},
upcoming: { marginVertical: 20 },
eventCardh1: { backgroundColor: '#f3e5f5', padding: 15, marginBottom: 10, borderRadius: 5 },
eventTitle: { fontWeight: 'bold' },
eventDescription: { fontSize: 12 },
eventDate: { color: 'gray', fontSize: 12 },
chartContainer: {
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 10,
},
centerLabel: {
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
},
percentageLabel: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#4CAF50',
  textAlign:'center',
},
subjectLabel: {
  fontSize: 12,
  fontWeight: '500',
  color: '#000',
  textAlign:'center',
},


});
