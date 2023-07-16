import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useQuery, gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Get_User_Email_Query } from "../queries";


const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("userInfo", jsonValue);
  } catch (e) {
  }
};

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, data } = useQuery(Get_User_Email_Query, {
    variables: { email },
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (data && data.userByEmail) {
      console.log("User logged in:", data.userByEmail);
      await storeData(data.userByEmail);
      navigation.navigate("Home Page");
      setEmail("");
      setPassword("");
      setErrorMessage("");
      setIsLoggedIn(true);
    } else {
      setErrorMessage("Sorry, please try again! Can't find that email.");
    }
  };

  const handleLogoutButtonPress = async () => {
    await AsyncStorage.removeItem("userInfo");
    navigation.navigate("Login");
    setIsLoggedIn(false);
  };

  return (
    <ScrollView style={styles.loginContainer}>
      <View style={styles.inputView}>
        <View style={{ padding: 30 }}>
          <Text
            style={{
              color: "#383240",
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              paddingBottom: 10,
            }}
          >
            Drala Mountain Center
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
            Login to access your meditation stats, videos, and more!
          </Text>
          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
              Email address
            </Text>
            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: "#52217B",
                borderWidth: 1,
                borderRadius: 8,
                marginBottom: 8,
              }}
            >
              <TextInput
                style={{ flex: 1, paddingLeft: 12 }}
                keyboardType="email-address"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
              Password
            </Text>
            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: "#52217B",
                borderWidth: 1,
                borderRadius: 8,
                marginBottom: 8,
              }}
            >
              <TextInput
                style={{ flex: 1, paddingLeft: 12 }}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.loginButton,
                { backgroundColor: "#655772" },
                isLoggedIn && { backgroundColor: "#FF0000" },
              ]}
              onPress={isLoggedIn ? handleLogoutButtonPress : handleSubmit}
            >
              <Text style={styles.buttonText}>
                {isLoggedIn ? "Logout" : "Login"}
              </Text>
            </TouchableOpacity>
            {errorMessage !== "" && (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  inputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    marginTop: 16,
    width: "100%",
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffee91",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});

export default Login;
