import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import App from './App';
import History from './lib/screens/History';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={App} />
      <Tab.Screen name="Settings" component={History} />
    </Tab.Navigator>
  );
}
