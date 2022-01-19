import React from "react";
import { View, Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import det from "../images/detail.png";

export const DetailScreen = ({}) => {

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ScrollView>
        <Image source={det} />
      </ScrollView>
    </View>
  );
};

DetailScreen.navigationOptions = {
  headerShown: false,
};
