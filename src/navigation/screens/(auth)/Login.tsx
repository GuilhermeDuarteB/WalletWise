import { Alert, Text, StyleSheet, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IconAppButton } from "../../../components/IconAppButton";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../../styles/globalStyles";
import { signInWithGoogle } from "../../../lib/googleAuth";
import { useState } from "react";
import { signInWithFacebook } from "../../../lib/facebookAuth";

export function Login() {
  const navigation = useNavigation();

  const [googleLoading, setGoogleLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);

  async function handleGoogleLogin() {
    if (googleLoading) return;

    try {
      setGoogleLoading(true);

      await signInWithGoogle();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Ocorreu um erro inesperado";
      Alert.alert("Erro a dar login com o Google", message);
      console.log(message);
    } finally {
      setGoogleLoading(false);
    }
  }

  async function handleFacebookLogin() {
    if (facebookLoading) return;
    try {
      setFacebookLoading(true);

      await signInWithFacebook();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Ocorreu um erro inesperado";
      Alert.alert("Erro a dar login com o Facebook", message);
      console.log(message);
    } finally {
      setFacebookLoading(false);
    }
  }

  return (
    <LinearGradient
      colors={["#6578e7", "#1b88df"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={globalStyles.container}
    >
      <Image
        source={require("../../../assets/WiseWallet_logo.png")}
        style={globalStyles.logoScreens}
      />
      <Image
        source={require("../../../assets/WiseWallet_texto.png")}
        style={globalStyles.logoTextScreens}
      />
      <Text style={globalStyles.slogan}>Cada despesa conta.</Text>
      <Text style={styles.subtitle}>
        Regista, organiza e compreende os teus gastos.
      </Text>
      <IconAppButton
        titulo="Continuar com Google"
        simbolo={require("../../../assets/Google__G__logo.png")}
        onPress={handleGoogleLogin}
      />
      <IconAppButton
        titulo="Continuar com Facebook"
        simbolo={require("../../../assets/facebook_logo.png")}
        onPress={handleFacebookLogin}
      />

      <IconAppButton
        titulo="Continuar com o E-mail"
        simbolo={require("../../../assets/email_logo.png")}
        onPress={() => navigation.navigate("LoginEmail")}
      />
      <Text style={styles.text}>Ainda não tem conta conta?</Text>

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
    marginBottom: 25,
    color: "#dad4d4",
    marginTop: -5,
  },
  text: {
    fontSize: 15,
    color: "#fff",
    marginTop: 10,
  },
});
