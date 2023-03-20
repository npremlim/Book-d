import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import Colors from "../constants/Colors";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function CrowdView() {
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View
          style={[
            styles.blueBubble,
            {
              width: 110,
              height: 110,
              borderRadius: 130,
              alignSelf: "flex-end",
              marginRight: "10%",
              marginTop: "0%",
              marginBottom: "15%",
            },
          ]}
        ></View>
        <View
          style={[
            styles.yellowBubble,
            {
              width: 50,
              height: 50,
              borderRadius: 100,
              alignSelf: "flex-start",
              marginRight: "10%",
              marginBottom: "80%",
            },
          ]}
        ></View>

        <View
          style={[
            styles.blueBubble,
            {
              width: 130,
              height: 130,
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
              width: 200,
              height: 200,
              borderRadius: 200,

              alignSelf: "flex-start",
            },
          ]}
        ></View>
      </View>
      <View
        style={{
          flex: 1,
          position: "absolute",
          justifyContent: "flex-start",
          alignContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
        }}
      >
        <Pressable
          style={{ marginLeft: "3%" }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" color={"black"} size={38}></Ionicons>
        </Pressable>

        <View
          style={{
            alignSelf: "center",
            marginBottom: "5%",
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "500" }}>
            ARC at{" "}
            <Text>
              {hours}:{min} pm
            </Text>
          </Text>
          <Text style={{ fontSize: 30, textAlign: "center" }}>
            Currently at
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Progress.Circle
            progress={0.6}
            size={250}
            indeterminate={false}
            color={Colors.default.teal}
            borderWidth={5}
            thickness={20}
            showsText={true}
            textStyle={{ fontWeight: "600", fontSize: 40, textAlign: "center" }}
            formatText={() => {
              return `60% capacity`;
            }}
          />
        </View>
        <View style={{ alignSelf: "center", marginTop: "5%" }}>
          <Text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 28,
              fontWeight: "500",

              marginBottom: "5%",
              textDecorationLine: "underline",
            }}
          >
            Upcoming reservations
          </Text>
          <View style={{ height: "35%" }}>
            <ScrollView>
              <View style={styles.reservations}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: "5%",
                      fontWeight: "500",
                    }}
                  >
                    Squat Racks
                  </Text>
                  <Text>4:00pm to 4:15pm </Text>
                  <Text style={{ marginTop: "2%" }}>Machine Code: SQ5</Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-end",
                    backgroundColor: Colors.default.teal,
                    paddingVertical: "2%",
                    paddingHorizontal: "5%",
                    borderRadius: 200,
                    marginLeft: "30%",
                    marginBottom: "5%",
                    flexWrap: "wrap",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "white",
                      flexWrap: "wrap",
                      fontWeight: "600",
                    }}
                  >
                    Edit/Cancel
                  </Text>
                </View>
              </View>

              <View style={styles.reservations}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: "5%",
                      fontWeight: "500",
                    }}
                  >
                    Bench Press
                  </Text>
                  <Text>7:30pm to 7:45pm </Text>
                  <Text style={{ marginTop: "2%" }}>Machine Code: SQ5</Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-end",
                    backgroundColor: Colors.default.teal,
                    paddingVertical: "2%",
                    paddingHorizontal: "5%",
                    borderRadius: 200,
                    marginLeft: "30%",

                    marginBottom: "7%",
                    flexWrap: "wrap",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Edit/Cancel
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <Pressable
            style={styles.bttn}
            onPress={() => {
              navigation.navigate("BookingPage");
            }}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Reserve a Machine
            </Text>
          </Pressable>
        </View>
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
    marginTop: "8%",
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
  reservations: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    padding: "3%",
    flexDirection: "row",
    marginBottom: "5%",
  },
});
