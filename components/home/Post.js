import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";

export default function Post({ postDetails }) {
  const { img, name, profile_picture, likes, comments } = postDetails;
  return (
    <View>
      <Divider width={1} orientation="vertical" />
      <PostHeader name={name} profilePicture={profile_picture} />
      <PostImage image={img} />
      <PostFooter />
      <Links likes={likes} />
      <CommentSection comments={comments} />
    </View>
  );
}

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

// post footer
const PostFooter = () => (
  <View style={styles.postFooter}>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity style={styles.icons}>
        <AntDesign name="hearto" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icons}>
        <Feather name="message-circle" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icons}>
        <Feather name="send" size={25} color="#fff" />
      </TouchableOpacity>
    </View>

    <TouchableOpacity>
      <Feather name="bookmark" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

// post likes
const Links = ({ likes }) => (
  <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
    <Text style={{ color: "#fff" }}>{likes} likes</Text>
  </View>
);

// Comment Section
const CommentSection = ({ comments }) => (
  <View style={{ paddingHorizontal: 15, paddingBottom: 10 }}>
    <Text style={{ color: "#fff" }}>
      <Text style={{ color: "#fff", fontWeight: "bold" }}>
        {comments[0].user} :{" "}
      </Text>
      {comments[0].comment}
    </Text>
    <TouchableOpacity>
      <Text style={{ color: "gray", textDecorationLine: "underline" }}>
        View more Comment
      </Text>
    </TouchableOpacity>
  </View>
);

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
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  icons: {
    marginRight: 12,
  },
});
