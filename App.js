import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeApp from "./pages/home/home";
import Component1 from "./pages/component1/component";
import { WeatherProvider } from "./context/WeatherContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <WeatherProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="home" component={HomeApp} />
          <Stack.Screen name="Component1" component={Component1} />
        </Stack.Navigator>
      </NavigationContainer>
    </WeatherProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
