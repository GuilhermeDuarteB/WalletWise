import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type IconAppButtonProps = {
  titulo: string;
  simbolo?: keyof typeof Ionicons | string;
  iconSize?: number;
  iconColor?: string;
  onPress: () => void;
  style?: TextStyle;
  buttonStyle?: ViewStyle;
};

export function IconAppButton({
  titulo,
  simbolo,
  iconSize = 24,
  iconColor = "#000000",
  onPress,
  style,
  buttonStyle,
}: IconAppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        buttonStyle,
        pressed && styles.buttonOnPress,
      ]}
    >
      {simbolo && (
        <Ionicons
          name={simbolo as any}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}

      <Text style={[styles.text, style]}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D8DFE9",
    borderRadius: 12,
    padding: 15,
    marginTop: 8,
  },
  buttonOnPress: {
    backgroundColor: "#DCEEFF",
    transform: [{ scale: 0.98 }],
  },
  icon: {},
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
