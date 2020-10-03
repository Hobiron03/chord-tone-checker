import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./src/Screen/HomeScreen";
import ConfigScreen from "./src/Screen/ConfigScreen";
import QuizScreen from "./src/Screen/QuizScreen";

enum Colors {
  bottomTab = "#0277bd",
  activeColor = "#E73E2D",
  inActiveColor = "gray",
}

const Home = () => {
  return <HomeScreen />;
};

const Config = () => {
  return <ConfigScreen />;
};

const Quiz = () => {
  return <QuizScreen />;
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="コード検索" component={Home} />
    </HomeStack.Navigator>
  );
};

const QuizStack = createStackNavigator();
const QuizStackScreen = () => {
  return (
    <QuizStack.Navigator>
      <QuizStack.Screen name="コードトーンクイズ" component={Quiz} />
    </QuizStack.Navigator>
  );
};

const ConfigStack = createStackNavigator();
const ConfigStackScreen = () => {
  return (
    <ConfigStack.Navigator>
      <ConfigStack.Screen name="設定" component={Config} />
    </ConfigStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = "ios-information-circle";

            if (route.name === "コード") {
              iconName = "ios-musical-notes";
            } else if (route.name === "クイズ") {
              iconName = "ios-help-circle";
            } else if (route.name === "設定") {
              iconName = "ios-settings";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.activeColor,
          inactiveTintColor: Colors.inActiveColor,
          style: { height: 85 },
        }}
      >
        <Tab.Screen name="コード" component={HomeStackScreen} />
        <Tab.Screen name="クイズ" component={QuizStackScreen} />
        <Tab.Screen name="設定" component={ConfigStackScreen} />
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
