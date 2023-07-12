import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log({
      email,
      password,
    });
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
