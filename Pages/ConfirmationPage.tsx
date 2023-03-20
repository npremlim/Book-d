import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

export default function ConfirmationPage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View
          style={[
            styles.blueBubble,
            {
              width: 130,
              height: 130,
              borderRadius: 130,
              alignSelf: "flex-end",
              marginRight: "30%",
              marginTop: "-10%",
              marginBottom: "10%",
            },
          ]}
        ></View>
        <View
          style={[
            styles.yellowBubble,
            {
              width: 70,
              height: 70,
              borderRadius: 100,
              alignSelf: "flex-end",
              marginRight: "10%",
            },
          ]}
        ></View>
        <View
          style={[
            styles.tealBubble,
            {
              width: 220,
              height: 220,
              borderRadius: 250,
              alignSelf: "flex-start",
              marginLeft: "5%",
              marginBottom: "45%",
            },
          ]}
        ></View>
        <View
          style={[
            styles.blueBubble,
            {
              width: 180,
              height: 180,
              borderRadius: 180,
              alignSelf: "flex-end",
              marginRight: "2%",
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

      <View style={styles.welcomeText}>
        <Text style={{ fontSize: 50, marginTop: "5%" }}>You're Book'd!</Text>
        <View style={{ width: "70%" }}>
          <Text style={{ fontSize: 18 }}>
            See you at the Squat Racks at 4:00pm on March 27th 2023!
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
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
    marginTop: "0%",
    backgroundColor: Colors.default.teal,
    padding: "3%",
    paddingHorizontal: "5%",
    borderRadius: 50,
  },
  inputForm: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 5,
    length: 20,
  },
  welcomeText: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
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
