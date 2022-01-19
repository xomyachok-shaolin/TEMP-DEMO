import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

import prod from "../images/prod.png";
import menuBACK from "../images/menuBACK.png";
import newsOFF from "../images/newsOFF.png";
import prodON from "../images/prodON.png";
import reqOFF from "../images/reqOFF.png";
import profOFF from "../images/profOFF.png";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export const ProdScreen = ({ navigation }) => {
  const goToNews = () => {
    navigation.navigate("Main");
  };

  const goToProf = () => {
    navigation.navigate("Prof");
  };

  const goToMesList = () => {
    navigation.navigate("MesList");
  };

  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ScrollView>
        <Image source={prod} />
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

        <Image source={prodON} />
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

ProdScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
