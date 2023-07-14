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

const Get_User_Email_Query = gql`
  query GetUserByEmail($email: String!) {
    userByEmail(email: $email) {
      id
      firstName
      lastName
      email
      member
    }
  }
`;

const storeData = async (value) => {
  try {    
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("userInfo", jsonValue);
  } catch (e) {
    // saving error
  }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userInfo, setUserInfo] = useState({})
  const { loading, error, data } = useQuery(Get_User_Email_Query, {
    variables: { email },
  });

  const handleSubmit = () => {
    if (data && data.userByEmail) {
      console.log("User logged in:", data.userByEmail);
      storeData(data.userByEmail)
      // console.log(userInfo, "UI line 36 login")
    } else {
      console.log("Email not found");
    }
  };

  return (
    <ScrollView style={styles.loginContainer}>
      <View style={styles.inputView}>
        <View style={{ padding: 30 }}>
          <Text
            style={{
              color: "#52217B",
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
              style={[styles.loginButton, { backgroundColor: "#52217B" }]}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
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
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;
