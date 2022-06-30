import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import ImageView from "react-native-image-viewing";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Color from "../constants/Color";
import CustomHeaderButton from "../components/HeaderButton";


const PlaceDetailScreen = (props) => {
  const data = props.navigation.getParam("placeData");
  const [visible, setIsVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => {
            setImageIndex(0);
            setIsVisible(true);
          }}
        >
          <Image
            style={styles.featuredImage}
            source={{ uri: data.featuredImage }}
          />
        </TouchableOpacity>
        {/* <Text style={styles.title}>{data.title}</Text> */}
        <View style={styles.addressView}>
          <Text style={styles.address}>{data.address}</Text>
          <Text style={styles.ratings}>
            {data.ratings}{" "}
            <Ionicons
              name={Platform.OS === "android" ? "md-star" : "ios-star"}
              size={16}
              color={Color.orange}
            />
          </Text>
        </View>

        <Text style={styles.description}>{data.description}</Text>
        {/* <Text style={styles.hostedBy}>{data.hostedBy}</Text> */}

        <ScrollView>
          <View style={styles.thisPlaceOffersView}>
            {data.thisPlaceOffers.map((offer) => (
              <Text key={offer} style={styles.thisPlaceOffersText}>
                <Ionicons
                  name={Platform.OS === "android" ? "md-play" : "ios-play"}
                  size={16}
                  color={Color.orange}
                />{" "}
                {offer}
              </Text>
            ))}
            {/* <Text style={styles.affordability}>{data.affordability}</Text> */}

            <View style={styles.imagesView}>
              {data.imagesUrl.map((imageUrl, index) => (
                <View key={index} style={styles.imageContainer}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setImageIndex(index);
                      setIsVisible(true);
                    }}
                  >
                    <Image
                      key={imageUrl.uri}
                      style={styles.imageUrl}
                      source={{ uri: imageUrl.uri }}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            <ImageView
              images={data.imagesUrl}
              imageIndex={imageIndex}
              visible={visible}
              onRequestClose={() => setIsVisible(false)}
            />
          </View>
          <TouchableNativeFeedback>
            <View style={styles.bookingButton}>
              <Text style={styles.bookingText}>Order This Product </Text>
              <Ionicons
                style={styles.bookingText}
                name={Platform.OS === "android" ? "md-book" : "ios-book"}
                size={22}
                color="#fff"
              />
            </View>
          </TouchableNativeFeedback>
        </ScrollView>
      </View>
    </ScrollView>
  );
};


PlaceDetailScreen.navigationOptions = (navData) => {
  const data = navData.navigation.getParam("placeData");

  return {
    headerTitle: data.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={data ? "ios-star" : "ios-star-outline"}
          onPress={() => {
            Alert.alert("Added to Favorites!", "You can view your favorites to check the place", [{text: "Okay"}]);
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  featuredImage: {
    width: "100%",
    height: 250,
  },
  title: {},
  addressView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  address: {
    fontSize: 16,
    justifyContent: "center",
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
    textAlign: "justify",
    marginBottom: 10,
  },
  hostedBy: {},
  thisPlaceOffersView: {
    paddingHorizontal: 20,
  },
  thisPlaceOffersTitle: {
    fontSize: 16,
  },
  thisPlaceOffersText: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  affordability: {},
  imagesView: {
    flex: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "50%",
    height: 100,
    marginBottom: 10,
  },
  imageUrl: {
    width: "98%",
    height: 100,
  },
  ratings: {
    fontSize: 16,
    justifyContent: "center",
  },
  bookingButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Color.orange,
  },
  bookingText: {
    fontSize: 16,
    padding: 20,
    fontWeight: "bold",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
});
export default PlaceDetailScreen;
