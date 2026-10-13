import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  Button,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IconAppButton } from "../../components/IconAppButton";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../styles/globalStyles";

export function Home() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#0521c2", "#1b88df"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={globalStyles.container}
    >
      <Image
        source={require("../../assets/walletwise-logo.png")}
        style={{ width: 200, height: 170, resizeMode: "contain" }}
      />
      <Text style={styles.subtitle}>Bem-vindo à tua carteira digital!</Text>
      <IconAppButton
        titulo="Continuar com Apple"
        simbolo={require("../../assets/apple_logo.png")}
        onPress={() => navigation.navigate("InitialScreen")}
      />
      <IconAppButton
        titulo="Continuar com Google"
        simbolo={require("../../assets/Google__G__logo.png")}
        onPress={() => navigation.navigate("InitialScreen")}
      />
      <IconAppButton
        titulo="Continuar com Facebook"
        simbolo={require("../../assets/facebook_logo.png")}
        onPress={() => navigation.navigate("InitialScreen")}
      />

      <IconAppButton
        titulo="Continuar com o E-mail"
        simbolo={require("../../assets/email_logo.png")}
        onPress={() => navigation.navigate("InitialScreen")}
      />
      <Text style={styles.text}>Ainda sem conta?</Text>

      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text
          style={{
            color: "#FFF",
            marginTop: 5,
            textDecorationLine: "underline",
          }}
        >
          Criar Conta
        </Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
    color: "#dad4d4",
  },
  text: {
    fontSize: 15,
    color: "#fff",
    marginTop: 10,
  },
});
