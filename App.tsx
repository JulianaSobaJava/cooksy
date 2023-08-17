import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/views/home";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/root";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: null as unknown as undefined,
          headerShown: false,
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="Main" component={AppNavigator} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>

      <StatusBar />
    </NavigationContainer>
  );
}
