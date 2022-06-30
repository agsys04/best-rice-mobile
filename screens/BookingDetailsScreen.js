import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput, Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import ImageView from "react-native-image-viewing";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Color from "../constants/Color";
import CustomHeaderButton from "../components/HeaderButton";

const BookingDetailsScreen = (props) => {
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

          <View style={styles.conversationContainer}>
            <Text style={styles.title}>Conversation</Text>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View style={styles.messageContainerSender}>
                <Text style={styles.convoSender}>05/28/2022 11:12am</Text>
                <Text style={styles.convoContentSender}>
                  Hello! How can I help you?
                </Text>
                <Text style={styles.convoSender}>Admin</Text>
              </View>
              <View style={styles.messageContainerYou}>
                <Text style={styles.convoYou}>05/28/2022 11:12am</Text>
                <Text style={styles.convoContentYou}>
                  How much is your travel package?
                </Text>
                <Text style={styles.convoYou}>You</Text>
              </View>

              <View styles={styles.formContainer}>
                <Text style={styles.title}>Input Message</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="default"
                  autoCorrect
                  multiline
                  autoCapitalize="sentences"
                  numberOfLines={3}
                />
                <View style={styles.buttonContainer}>
                  <Button title='Send Message' onPress={()=> {
                    Alert.alert(
                      "Are you sure?",
                      "You want to send the message to Travel Agent",
                      [
                        { text: "No", style: "default" },
                        {
                          text: "Yes",
                          style: "destructive",
                          onPress: () => {
                            Alert.alert("Success!", "You send the message.", [{text: "Okay"}])
                          },
                        },
                      ]
                    );
                  }} />
                </View>
              </View>
            </ScrollView>
          </View>

          <TouchableNativeFeedback onPress={()=> {
             Alert.alert(
               "Are you sure?",
               "You want to cancel Booking?",
               [
                 { text: "No", style: "default" },
                 {
                   text: "Yes",
                   style: "destructive",
                   onPress: () => {
                     Alert.alert("Done", "Your Booking was cancelled", [
                       { text: "Okay" },
                     ]);
                   },
                 },
               ]
             );
          }}>
            <View style={styles.bookingButton}>
              <Text style={styles.bookingText}>Cancel </Text>
            </View>
          </TouchableNativeFeedback>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

BookingDetailsScreen.navigationOptions = (navData) => {
  const data = navData.navigation.getParam("placeData");

  return {
    headerTitle: data.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={data ? "ios-star" : "ios-star-outline"}
          onPress={() => {
            Alert.alert(
              "Added to Favorites!",
              "You can view your favorites to check the place",
              [{ text: "Okay" }]
            );
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    marginHorizontal: 20
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  convoYou: {
    textAlign: "right",
  },
  convoSender: {},
  convoContentYou: {
    textAlign: "right",
    fontWeight: "bold",
  },
  convoContentSender: {
    fontWeight: "bold",
  },
  conversationContainer: {
    paddingVertical: 20,
  },
  messageContainerSender: {
    flex: 1,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: Color.yellow,
    borderRadius: 18,
    marginBottom: 15,
  },
  messageContainerYou: {
    flex: 1,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: Color.green,
    borderRadius: 18,
    textAlign: "right",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  featuredImage: {
    width: "100%",
    height: 250,
  },
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
    backgroundColor: "red",
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
export default BookingDetailsScreen;
