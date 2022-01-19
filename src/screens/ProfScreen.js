import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import menuBACK from "../images/menuBACK.png";
import newsOFF from "../images/newsOFF.png";
import profON from "../images/profON.png";
import reqOFF from "../images/reqOFF.png";
import prodOFF from "../images/prodOFF.png";
import prof from "../images/prof.png";

export const ProfScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");

  const goToNews = () => {
    navigation.navigate("Main");
  };

  const goToProd = () => {
    navigation.navigate("Prod");
  };

  const goToMesList = () => {
    navigation.navigate("MesList");
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ScrollView>
        <Image source={prof} />
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
        <TouchableOpacity style={styles.touchable} onPress={goToNews}>
          <View style={styles.view}></View>
          <Image source={newsOFF} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={goToProd}>
          <View style={styles.view}></View>
          <Image source={prodOFF} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={goToMesList}>
          <View style={styles.view}></View>
          <Image source={reqOFF} style={styles.image} />
        </TouchableOpacity>
        <Image source={profON} />
      </View>
    </View>
  );
};

ProfScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
