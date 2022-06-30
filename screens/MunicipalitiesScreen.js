import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import MunicipalityGridItem from "../components/MunicipalityGridItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ScrollView } from "react-native-virtualized-view";

import { MUNICIPALITIES } from "../data/dummy-data";
import CustomHeaderButton from "../components/HeaderButton";

import Color from '../constants/Color';


const MunicipalitiesScreen = (props) => {
  
  const renderGridItem = (itemData) => {

    return (
      <MunicipalityGridItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelectMunicipality={() => {
          props.navigation.navigate({
            routeName: "Places",
            params: {
              municipalityId: itemData.item.id,
              title: itemData.item.title
            },
          });
        }}
      />
    );
  }
  return (
    <ScrollView>
        <Text style={styles.title}>
          THIS IS OUR AVAILABLE TOURIST SPOT IN TRAVEL DAVSUR
        </Text>
        <FlatList
          numColumns={2}
          data={MUNICIPALITIES}
          renderItem={renderGridItem}
        />
    </ScrollView>
  );
};

MunicipalitiesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "DAVAO DEL SUR",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    marginHorizontal: 20,
    color: Color.orange,
  },
});

export default MunicipalitiesScreen;
