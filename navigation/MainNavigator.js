import React from 'react';
import { Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Platform } from "react-native";


import Color from '../constants/Color';
import MunicipalitiesScreen from '../screens/MunicipalitiesScreen';
import PlacesScreen from '../screens/PlacesScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import BookingScreen from '../screens/BookingScreen';
import AuthScreen from '../screens/AuthScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookingDetailsScreen from '../screens/BookingDetailsScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor:
      Platform.OS === "android" || Platform.OS === "web"
        ? Color.green
        : Color.green,
  },
  headerTitleStyle: {
  },
  headerTintColor:
    Platform.OS === "android" || Platform.OS === "web" ? "#fff" : Color.orange,
};

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesScreen,
    Detail: PlaceDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites : FavoriteScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const BookingNavigator = createStackNavigator(
  {
    Bookings: BookingScreen,
    BookingDetail: BookingDetailsScreen
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-book" : "ios-book"}
          size={23}
          color={drawerConfig.activeTintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const tabScreenConfig = {
  Places: {
    screen: PlacesNavigator,
    navigationOptions: {
      tabBarLabel: "Places",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="md-cart" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Color.green,
      tabBarLabel: <Text>Products</Text>,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Color.orange,
      tabBarLabel:
        Platform.OS === "android" || Platform.OS === "web" ? (
          <Text /*style={{ fontFamily: "open-sans-bold" }}*/>Favorites</Text>
        ) : (
          "Favorites"
        ),
    },
  },
};

const PlacesFavTabNavigator = createMaterialBottomTabNavigator(
  tabScreenConfig,
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "md-cart"}
          size={23}
          color={drawerConfig.activeTintColor}
        />
      ),
    },
    activeColor: "white",
    shifting: true,
  }
);

const ProfileNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-person" : "ios-person"}
          size={23}
          color={drawerConfig.activeTintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const UserNavigator = createDrawerNavigator(
  {
    Profile: ProfileNavigator,
    PlacesFav: {
      screen: PlacesFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Products",
      },
    },
    Orders: BookingNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Color.green,
      itemsContainerStyle: {
        marginVertical: 84,
      },
      iconContainerStyle: {
        opacity: 1,
      },
      labelStyle: {
        // fontFamily: "open-sans-bold",
        fontSize: 15,
      },
    },
  }
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  User: UserNavigator,
});

export default createAppContainer(MainNavigator);