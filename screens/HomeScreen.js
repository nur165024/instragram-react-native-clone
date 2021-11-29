import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* mobile status bar */}
      <StatusBar animated={true} backgroundColor="#000" hidden={false} />
      {/* header item */}
      <Header />
      {/* stories item */}
      <Stories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
});
