import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { storiesData } from "../Data/storiesData";

export default function Stories() {
  return (
    <View style={{ marginBottom: 15 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {storiesData.map((store, index) => (
          <View key={index}>
            <Image source={{ uri: store.img }} style={styles.storeImage} />
            <Text style={{ color: "#fff", textAlign: "center" }}>
              {store.name.toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  storeImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff8501",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
