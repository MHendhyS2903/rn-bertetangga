/**
 * RT/RW Digital App
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { mdiHome, mdiAccountGroup, mdiCashMultiple, mdiMessageAlert, mdiAccount } from '@mdi/js';
import { theme } from './src/theme/theme';
import Icon from './src/components/Icon/index';

// Import screens
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import ResidentsScreen from './src/screens/ResidentsScreen';
import FinanceScreen from './src/screens/FinanceScreen';
import ComplaintsScreen from './src/screens/ComplaintsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon path={mdiHome} color={color} size={size} />
);

const ResidentsIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon path={mdiAccountGroup} color={color} size={size} />
);

const FinanceIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon path={mdiCashMultiple} color={color} size={size} />
);

const ComplaintsIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon path={mdiMessageAlert} color={color} size={size} />
);

const ProfileIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon path={mdiAccount} color={color} size={size} />
);

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#F4631E',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#F79B72',
          borderTopWidth: 0.5,
          borderTopColor: '#DBDBDB',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderLeftWidth: 0.5,
          borderRightWidth: 0.5,
          borderLeftColor: '#DBDBDB',
          borderRightColor: '#DBDBDB',
          marginHorizontal: 10,
          overflow: 'hidden',
        },
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold' as const,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Residents"
        component={ResidentsScreen}
        options={{
          tabBarIcon: ResidentsIcon,
        }}
      />
      <Tab.Screen
        name="Finance"
        component={FinanceScreen}
        options={{
          tabBarIcon: FinanceIcon,
        }}
      />
      <Tab.Screen
        name="Complaints"
        component={ComplaintsScreen}
        options={{
          tabBarIcon: ComplaintsIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="MainApp" component={MainTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;