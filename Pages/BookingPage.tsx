import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  Pressable,
  DatePickerIOSBase,
} from "react-native";
import Colors from "../constants/Colors";
import * as Progress from "react-native-progress";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const [open2, setOpen2] = useState(false);

  function error() {
    if (date.getHours() == 16) {
      alert(
        "You already have a booking at 3:00 pm on the 3/27/2023. Please choose another day/time."
      );
    } else if (value == null) {
      alert("Please select a machine before moving on ");
    } else {
      navigation.navigate("Confirmation");
    }
  }
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items, setItems] = useState([
    {
      label: "Leg Press",
      value: "LegPress",
      icon: () => <FontAwesome5 name="walking" size={22} />,
    },
    {
      label: "Hip Thrust",
      value: "HipThrust",
      icon: () => <FontAwesome5 name="weight-hanging" size={22} />,
    },
    {
      label: "Bench Press",
      value: "BenchPress",
      icon: () => <Ionicons name="barbell" size={28} color="black" />,
    },
    {
      label: "Squat Rack",
      value: "SquatRack",
      icon: () => <FontAwesome5 name="th-list" size={22} />,
    },
  ]);

  const [time, setTime] = useState([
    {
      label: "4:00pm - 4:15pm",
      value: "4",
      icon: () => <Ionicons name="time" size={28} color="black" />,
    },
    {
      label: "4:15pm - 4:30pm",
      value: "415",
      icon: () => <Ionicons name="time" size={28} color="black" />,
    },
    {
      label: "6:45pm - 7:00pm",
      value: "645",
      icon: () => <Ionicons name="time" size={28} color="black" />,
    },
    {
      label: "8:00pm - 8:15pm",
      value: "8",
      icon: () => <Ionicons name="time" size={28} color="black" />,
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
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
              marginBottom: "20%",
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
              marginRight: "0%",
              marginBottom: "60%",
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
            marginTop: "-5%",
            marginBottom: "5%",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "400" }}>Machines</Text>
        </View>

        <View></View>

        <View style={{ width: "90%", alignSelf: "center" }}>
          <View style={{ marginBottom: "10%", position: "relative" }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select a machine"
            />
          </View>

          <View style={{ marginTop: "40%", marginBottom: "40%" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "400",
                alignSelf: "center",
                marginBottom: "5%",
              }}
            >
              Timeslots
            </Text>

            <DateTimePicker
              value={date}
              display={"spinner"}
              mode={"datetime"}
              style={{ backgroundColor: "white" }}
            />
          </View>
          <View style={{ marginTop: "-15%" }}>
            <Pressable
              style={styles.bttn}
              onPress={() => {
                error();
              }}
            >
              <Text
                style={{ color: "white", alignSelf: "center", fontSize: 18 }}
              >
                Book
              </Text>
            </Pressable>
          </View>
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
