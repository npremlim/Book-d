import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import Colors from "../constants/Colors";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const users = ["naomipremlim", "alliejones", "kasra"];

export default function LoginScreen() {
  function auth(username, password) {
    if (users.includes(username)) {
      alert("Authentication Success!");
      navigation.navigate("CrowdView");
    } else {
      alert("This username/password is wrong. Please try again");
    }
  }
  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View
          style={[
            styles.tealBubble,
            {
              width: 110,
              height: 110,
              borderRadius: 130,
              alignSelf: "flex-end",
              marginRight: "10%",
              marginTop: "-10%",
              marginBottom: "15%",
            },
          ]}
        ></View>
        <View
          style={[
            styles.blueBubble,
            {
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: "flex-start",
              marginRight: "10%",
              marginBottom: "20%",
            },
          ]}
        ></View>
        <View
          style={[
            styles.yellowBubble,
            {
              width: 40,
              height: 40,
              borderRadius: 250,
              alignSelf: "center",
              marginLeft: "5%",
              marginBottom: "75%",
            },
          ]}
        ></View>
        <View
          style={[
            styles.tealBubble,
            {
              width: 180,
              height: 180,
              borderRadius: 180,
              alignSelf: "flex-end",
              marginRight: "5%",
              marginBottom: "10%",
            },
          ]}
        ></View>
        <View
          style={[
            styles.yellowBubble,
            {
              width: 180,
              height: 180,
              borderRadius: 180,

              alignSelf: "flex-start",
            },
          ]}
        ></View>
      </View>
      <View style={{ flex: 1, alignSelf: "center", marginTop: "20%" }}>
        <View style={styles.welcomeText}>
          <Text style={{ fontSize: 30 }}>Log In </Text>
        </View>

        <TextInput
          style={styles.inputForm}
          placeholder="Username/Email"
          value={user}
          onChangeText={setUser}
        ></TextInput>
        <TextInput
          style={styles.inputForm}
          placeholder="Password"
          value={pw}
          onChangeText={setPw}
          secureTextEntry={true}
        ></TextInput>
        <Pressable
          style={styles.bttn}
          onPress={() => {
            auth(user, pw);
          }}
        >
          <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
            Log In
          </Text>
        </Pressable>
        <Text
          style={{
            alignSelf: "center",
            color: Colors.default.blue,
            marginTop: "2%",
            textDecorationLine: "underline",
          }}
        >
          Create Account
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bttn: {
    marginTop: "18%",
    backgroundColor: Colors.default.blue,
    padding: "3%",
    paddingHorizontal: "5%",
    borderRadius: 100,
  },
  inputForm: {
    marginBottom: 20,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    width: 350,
    height: 46,
    borderRadius: 10,
    padding: "2%",
  },
  welcomeText: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10%",
  },
  yellowBubble: {
    backgroundColor: Colors.default.yellow,
  },
  blueBubble: {
    backgroundColor: Colors.default.blue,
  },
  tealBubble: {
    backgroundColor: Colors.default.teal,
  },
  background: {
    position: "absolute",

    width: "100%",
    height: "120%",
  },
});
