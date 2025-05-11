import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          switch (route.name) {
            case 'tasks':
              iconName = 'check-circle-outline';
              break;
            case 'passwords':
              iconName = 'lock-outline';
              break;
            case 'events':
              iconName = 'calendar-month-outline';
              break;
            case 'locations':
              iconName = 'map-marker-outline';
              break;
            case 'finances':
              iconName = 'finance';
              break;
            default:
              iconName = 'circle-outline';
          }
          return <MaterialCommunityIcons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="tasks" options={{ title: 'Tasks' }} />
      <Tabs.Screen name="passwords" options={{ title: 'Passwords' }} />
      <Tabs.Screen name="events" options={{ title: 'Events' }} />
      <Tabs.Screen name="locations" options={{ title: 'Locations' }} />
      <Tabs.Screen name="finances" options={{ title: 'Finances' }} />
    </Tabs>
  );
} 