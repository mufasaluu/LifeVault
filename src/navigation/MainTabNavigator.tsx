import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TasksScreen from '../features/tasks/TasksScreen';
import PasswordsScreen from '../features/passwords/PasswordsScreen';
import EventsScreen from '../features/events/EventsScreen';
import FinanceScreen from '../features/finance/FinanceScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Tasks"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: string = '';
        if (route.name === 'Tasks') {
          iconName = 'check-circle-outline';
        } else if (route.name === 'Passwords') {
          iconName = 'lock-outline';
        } else if (route.name === 'Events') {
          iconName = 'calendar-month-outline';
        } else if (route.name === 'Finance') {
          iconName = 'finance';
        }
        return <MaterialCommunityIcons name={iconName as any} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Tasks" component={TasksScreen} />
    <Tab.Screen name="Passwords" component={PasswordsScreen} />
    <Tab.Screen name="Events" component={EventsScreen} />
    <Tab.Screen name="Finance" component={FinanceScreen} />
  </Tab.Navigator>
);

export default MainTabNavigator; 