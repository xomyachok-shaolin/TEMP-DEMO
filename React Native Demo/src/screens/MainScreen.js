import React from "react";
import {
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { colors } from "react-native-elements";

import menuBACK from "../images/menuBACK.png";
import reqOFF from "../images/reqOFF.png";
import prodOFF from "../images/prodOFF.png";
import profOFF from "../images/profOFF.png";
import newsON from "../images/newsON.png";
import index from "../images/index.png";

export const MainScreen = ({ navigation }) => {
  const goToProd = () => {
    navigation.navigate("Prod");
  };

  const goToProf = () => {
    navigation.navigate("Prof");
  };

  const goToMesList = () => {
    navigation.navigate("MesList");
  };

  const goToDetail = () => {
    navigation.navigate("Detail");
  };

  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ScrollView>
        <TouchableOpacity style={styles.touchable} onPress={goToDetail}>
          <View style={styles.view}></View>
          <Image source={index} style={styles.image} />
        </TouchableOpacity>
      </ScrollView>

      <Image source={menuBACK} style={{ position: "absolute", bottom: 0 }} />

      <View
        style={{
          bottom: 30,
          flexDirection: "row",
          width: width - 80,
          justifyContent: "space-between",
        }}
      >
        <Image source={newsON} />
        <TouchableOpacity style={styles.touchable} onPress={goToProd}>
          <View style={styles.view}></View>
          <Image source={prodOFF} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={goToMesList}>
          <View style={styles.view}></View>
          <Image source={reqOFF} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={goToProf}>
          <View style={styles.view}></View>
          <Image source={profOFF} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

MainScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    backgroundColor: "transparent",
  },
  image: {},
  touchable: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.button,
    fontSize: 18,
    textAlign: "center",
  },
});
