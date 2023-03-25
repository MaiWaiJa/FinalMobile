import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SingleScreen from './src/screens/SingleScreen';
import ContentScreen from './src/screens/ContentScreen';

import DataContextProvider from './src/store/useData';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <DataContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#f1f' },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="SingleScreen"
              component={SingleScreen}
            />   
            {/* <Stack.Screen
              name="ContentScreen"
              component={ContentScreen}
            />    */}
          </Stack.Navigator>
        </NavigationContainer>
      </DataContextProvider>
    </>
  );
}
