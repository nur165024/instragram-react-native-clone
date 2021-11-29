import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://48salonestilo.ca/wp-content/uploads/2015/05/george-town-salon-instagram-title.png",
          }}
          style={styles.logo}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <AntDesign name="plussquareo" size={25} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="hearto" size={25} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageIcon}>
          <AntDesign name="message1" size={25} style={styles.icons} />
          <Text
            style={{
              color: "#fff",
              backgroundColor: "red",
              position: "absolute",
              right: -12,
              top: -10,
              width: 25,
              height: 25,
              lineHeight: 20,
              textAlign: "center",
              borderRadius: 30,
            }}
          >
            11
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    color: "#fff",
    paddingHorizontal: 5,
  },
  messageIcon: {
    position: "relative",
  },
});
