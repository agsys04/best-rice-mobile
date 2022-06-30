import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Image
} from "react-native";
import {
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import Color from "../constants/Color";

const ProfileScreen = (props) => {

  function logoutHandler(){
    props.navigation.navigate('Auth');
  }

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={{
                uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/279294362_1873550776173633_6718247808205432512_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEvROpcdeZ1fFduAbeobgwp96-FqeHa0Tn3r4Wp4drROTy5qheF3Mdgx6gQ6GujpwtxTfygBAwKPupbzNosSqu-&_nc_ohc=l6tds7SSFo8AX-3d2-g&tn=0K9lhD6tDvarTI7z&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT_Q6WG6ctJsvk8_A_C3ERpm8iyCTrjVHy-ssXlbiVB3qg&oe=62980E16",
              }}
            />
          </View>
          <Text style={{ ...styles.title, ...styles.header }}>
            Honey Latonio
          </Text>
          <View style={styles.changePasswordButton}>
            <Button title="Logout" onPress={logoutHandler} />
          </View>
          <Text style={styles.content}>
            Address:{" "}
            <Text style={styles.emphasize}>
              Lim del Rosario Street., Digos City, Davao del Sur
            </Text>
          </Text>
          <Text style={styles.content}>
            Gender: <Text style={styles.emphasize}>Female</Text>{" "}
          </Text>
          <Text style={styles.content}>
            Status: <Text style={styles.emphasize}>Single</Text>{" "}
          </Text>
          <Text style={styles.content}>
            Email: <Text style={styles.emphasize}>honey234@gmail.com</Text>
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={5}
          style={styles.screen}
        >
          <View style={styles.container}>
            <ScrollView>
              <View>
                <Text style={styles.title}>CHANGE PASSWORD</Text>
                <Text style={styles.label}>Old Password: </Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  keyboardType="default"
                  autoCapitalize="none"
                />
              </View>
              <View>
                <Text style={styles.label}>New Password: </Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  keyboardType="default"
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.changePasswordButton}>
                <Button title="Change Password" />
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

ProfileScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Hi HONEY",
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
  screen: {
    flex: 1,
  },
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 12,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 20,
  },
  label: {
    marginHorizontal: 20,
  },
  input: {
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  profileImage: { width: 200, height: 200, borderRadius: 200 / 2 },
  imageContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  changePasswordButton: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },
  header: {
    fontSize: 24,
    color: Color.green,
  },
  content: {
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  emphasize: {
    fontWeight: 'bold'
  }
});

export default ProfileScreen;
