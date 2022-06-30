import React, {useState} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  TextInput
} from "react-native";
import Color from "../constants/Color";

const AuthScreen = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const loginHandler = () => {
     props.navigation.navigate({
       routeName: "Places",
       params: {
         municipalityId: "DIGOS",
         title: "Products",
       },
     });
  }

  const signupHandler = () => {
    setIsLogin(false);
  }

  const goLoginHandler = () => {
    setIsLogin(true);
  }

  if(!isLogin)
  {
    return (
      <ImageBackground
        style={styles.bgImage}
        resizeMode="cover"
        source={require("../assets/background.jpg")}
      >
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={5}
          style={styles.screen}
        >
          <View style={styles.card}>
            <ScrollView>
              <Text style={styles.title}>SIGN UP</Text>
              <Text style={styles.label}>Name: </Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                keyboardType="default"
                autoCapitalize="none"
              />
              <Text style={styles.label}>Address: </Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                multiline
                numberOfLines={3}
                keyboardType="default"
                autoCapitalize="none"
              />
              <Text style={styles.label}>Email: </Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Text style={styles.label}>Password: </Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                keyboardType="default"
                autoCapitalize="none"
              />
              <View style={styles.loginButton}>
                <Button
                  title="SIGN UP"
                  onPress={loginHandler}
                  color={Color.green}
                />
              </View>
              <View style={styles.loginButton}>
                <Button
                  title="ALREADY A USER"
                  onPress={goLoginHandler}
                  color={Color.orange}
                />
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      style={styles.bgImage}
      resizeMode="cover"
      source={require("../assets/background.jpg")}
    >
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={5}
        style={styles.screen}
      >
        <View style={styles.card}>
          <ScrollView>
            <Text style={styles.title}>LOGIN</Text>
            <Text style={styles.label}>Email: </Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.label}>Password: </Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              keyboardType="default"
              autoCapitalize="none"
            />
            <View style={styles.loginButton}>
              <Button
                title="LOGIN"
                onPress={loginHandler}
                color={Color.orange}
              />
            </View>
            <View style={styles.loginButton}>
              <Button
                title="NEW MEMBER"
                onPress={signupHandler}
                color={Color.green}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "Rice'Best",
};

const styles = StyleSheet.create({
  loginButton:{
    marginTop: 10,
   marginBottom: 5,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 600,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 20,
  },
  label: {
    // fontFamily: "open-sans-bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default AuthScreen;
