import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { MainScreen } from "../screens/MainScreen";
import { ProdScreen } from "../screens/ProdScreen";
import { ProfScreen } from "../screens/ProfScreen";
import { MesListScreen } from "../screens/MesListScreen";
import { MesScreen } from "../screens/MesScreen";
import { DetailScreen } from "../screens/DetailScreen";

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Prod: {
      screen: ProdScreen,
    },
    Prof: {
      screen: ProfScreen,
    },
    MesList: {
      screen: MesListScreen,
    },
    Mes: {
      screen: MesScreen,
    },
    Detail: {
      screen: DetailScreen,
    }
  },
  {
    initialRouteName: "Main",
  }
);

export const AppNavigation = createAppContainer(PostNavigator);
