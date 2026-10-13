import { View, Text, StyleSheet, Image, Alert, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IconAppButton } from "../../components/IconAppButton";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../styles/globalStyles";
import { useState } from "react";

export function Register() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      <Text style={styles.title}>Criar conta</Text>
      <Text style={styles.subtitle}>
        Por favor cria a tua conta para continuar!
      </Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        placeholderTextColor={"#000"}
      />

      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        placeholderTextColor={"#000"}
      />

      <TextInput
        placeholder="Palavra-Passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor={"#000"}
      />

      <TextInput
        placeholder="Confirmar Palavra-Passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor={"#000"}
      />
      <Text style={styles.text}>Já tem conta?</Text>

      <Pressable onPress={() => navigation.navigate("Home")}>
              <Text
                style={{
                  color: "#FFF",
                  marginTop: 5,
                  textDecorationLine: "underline",
                }}
              >
                Entrar
              </Text>
            </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
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
  input: {
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
});
