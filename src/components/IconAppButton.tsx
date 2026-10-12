import {
  ImageSourcePropType,
  Pressable,
  Text,
  Image,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";


type IconAppButtonProps = {
  titulo: string;
  simbolo?: ImageSourcePropType;
  onPress: () => void;
  style?: TextStyle;
  buttonStyle?: ViewStyle;
};

export function IconAppButton({
  titulo,
  simbolo,
  onPress,
  style,
  buttonStyle,
}: IconAppButtonProps) {
  return (
    <Pressable onPress={()=> {onPress();
}} style={[styles.button, buttonStyle]}>
      <Image source={simbolo} style={styles.icon} />
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
    marginTop: 5,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
