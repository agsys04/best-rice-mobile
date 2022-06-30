import React from 'react';
import { View, Text, TouchableNativeFeedback, ImageBackground, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

const PlaceItem = props => {

    const renderImages = (itemData) => {
         <View style={styles.slide}>
           <Image styles={styles.slideImage} source={{ uri: itemData.item }} />
         </View>;
    }
    return (
      <View style={styles.placeItem}>
        <TouchableNativeFeedback onPress={props.onSelectPlace}>
          <View>
            <View style={{ ...styles.placeRow, ...styles.placeHeader }}>
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
            </View>
            <View style={{ ...styles.placeRow, ...styles.placeDetail }}>
              <Text>Hosted By: {props.hostedBy}</Text>
              <Text>Affordability: {props.affordability}</Text>
              <Text>Location: {props.address}</Text>
              <Text style={styles.placeDetail}>{props.description}</Text>
              {props.thisPlaceOffers.map((offer) => (
                <Text style={styles.placeDetail}>{offer}</Text>
              ))}
            </View>
            <View style={styles.images}>
              <Carousel
                // ref={(c) => {
                //   this._carousel = c;
                // }}
                data={props.imagesUrl}
                renderItem={renderImages}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
              />
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
}

const styles = StyleSheet.create({
    placeItem:{},
    placeRow:{},
    placeHeader: {},
    bgImage: {},
    titleContainer:{},
    title:{},
    placeDetail:{},
    slideImage: {},
    slide: {
        flex: 1
    }
});

export default PlaceItem;