import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./src/Screen/HomeScreen";
import ConfigScreen from "./src/Screen/ConfigScreen";
import QuizScreen from "./src/Screen/QuizScreen";
import { color } from "react-native-reanimated";

enum Colors {
  bottomTab = "#0277bd",
  activeColor = "#E73E2D",
  inActiveColor = "gray",
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = "ios-information-circle";

            if (route.name === "コード") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "クイズ") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "設定") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.activeColor,
          inactiveTintColor: Colors.inActiveColor,
        }}
      >
        <Tab.Screen name="コード" component={HomeScreen} />
        <Tab.Screen name="クイズ" component={QuizScreen} />
        <Tab.Screen name="設定" component={ConfigScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
