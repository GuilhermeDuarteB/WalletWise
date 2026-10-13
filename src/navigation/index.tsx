import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./screens/Home";
import { InitialScreen } from "./screens/InitialScreen";
import { Register } from "./screens/Register";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",

  screenOptions:{
    animation:"fade",
    animationDuration: 300,
    headerShown: false,
  },
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
      },
    },
    InitialScreen:{
      screen: InitialScreen,
      options:{
        headerShown:false,
      },
    },
    Register:{
      screen: Register,
      options:{
        headerShown: false,
      }
    }
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackType = typeof RootStack;

declare module "@react-navigation/native" {
  interface RootNavigator extends RootStackType {}
}