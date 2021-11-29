import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import Entypo from "react-native-vector-icons/Entypo";

export default function Post({ postDetails }) {
  const { img, name, profile_picture } = postDetails;
  return (
    <View>
      <Divider width={1} orientation="vertical" />
      <PostHeader name={name} profilePicture={profile_picture} />
      <PostImage image={img} />
    </View>
  );
}

// css style
const styles = StyleSheet.create({
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  userName: {
    marginLeft: 10,
    color: "#fff",
  },
  postImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
});

// post header component
const PostHeader = ({ name, profilePicture }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 15,
      paddingVertical: 10,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      <Text style={styles.userName}>{name}</Text>
    </View>
    <Text style={{ color: "#fff" }}>
      <Entypo name="dots-three-horizontal" size={20} color="#fff" />
    </Text>
  </View>
);

// post image
const PostImage = ({ image }) => (
  <View>
    <Image source={{ uri: image }} style={styles.postImage} />
  </View>
);
