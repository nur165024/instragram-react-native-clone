import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { postData } from "../components/Data/postData";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* mobile status bar */}
      <StatusBar animated={true} backgroundColor="#000" hidden={false} />
      {/* header item */}
      <Header />

      <ScrollView>
        {/* stories item */}
        <Stories />
        {/* post list */}
        {postData.map((data, index) => (
          <Post postDetails={data} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
});
