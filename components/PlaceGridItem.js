import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Color from "../constants/Color";

const PlaceGridItem = (props) => {
  return (
    <View style={styles.placeItem}>
      <TouchableNativeFeedback onPress={props.onSelectPlace}>
        <View>
          <View style={{ ...styles.placeRow, ...styles.placeHeader }}>
            <ImageBackground
              source={{ uri: props.featuredImage }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.placeRow, ...styles.placeDetail }}>
            <Text>{props.affordability}</Text>
            <Text>
              {props.ratings} 
              <Ionicons
                name={Platform.OS === "android" ? "md-star" : "ios-star"}
                size={16}
                color={Colors.orange}
              />
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  placeRow: {
    flexDirection: "row",
  },
  placeItem: {
    height: 300,
    width: "100%",
    backgroundColor: '#ececec',
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  placeHeader: {
    height: "80%",
  },
  placeDetail: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default PlaceGridItem;
