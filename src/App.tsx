import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";

import { Navigation } from "./navigation";

export function App() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return <Navigation theme={theme} />;
}