import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import menuBACK from "../images/menuBACK.png";
import newsOFF from "../images/newsOFF.png";
import prodOFF from "../images/prodOFF.png";
import profOFF from "../images/profOFF.png";
import reqON from "../images/reqON.png";
import mesList from "../images/mesList.png";

export const MesListScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");

  const goToNews = () => {
    navigation.navigate("Main");
  };

  const goToProd = () => {
    navigation.navigate("Prod");
  };

  const goToProf = () => {
    navigation.navigate("Prof");
  };

  const goToMes = () => {
    navigation.navigate("Mes");
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ScrollView>
        <TouchableOpacity style={styles.touchable} onPress={goToMes}>
          <View style={styles.view}></View>
          <Image source={mesList} style={styles.image} />
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
        <TouchableOpacity style={styles.touchable} onPress={goToNews}>
          <View style={styles.view}></View>
          <Image source={newsOFF} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={goToProd}>
          <View style={styles.view}></View>
          <Image source={prodOFF} style={styles.image} />
        </TouchableOpacity>
        <Image source={reqON} />
        <TouchableOpacity style={styles.touchable} onPress={goToProf}>
          <View style={styles.view}></View>
          <Image source={profOFF} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

MesListScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
