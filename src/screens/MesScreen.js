import React from "react";
import { View, Image, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import mes from "../images/mes.png";

export const MesScreen = ({}) => {

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ScrollView>
        <Image source={mes} />
      </ScrollView>
    </View>
  );
};

MesScreen.navigationOptions = {
  headerShown: false,
};