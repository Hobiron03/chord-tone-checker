import React from "react";
import { Text, StyleSheet, SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is HomeScreen</Text>
      <View>
        <Text>Hello</Text>
      </View>
      <View>
        <Text>world</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
