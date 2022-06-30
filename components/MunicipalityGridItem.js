import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from "react-native";

const MunicipalityGridItem = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback onPress={props.onSelectMunicipality}>
        <ImageBackground
          source={{ uri: props.imageUrl }}
          style={styles.bgImage}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </View>
        </ImageBackground>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 18,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
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

export default MunicipalityGridItem;
