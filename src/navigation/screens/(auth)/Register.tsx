import {
  Text,
  StyleSheet,
  Image,
  Alert,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IconAppButton } from "../../../components/IconAppButton";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../../styles/globalStyles";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { supabase } from "../../../lib/supabase";

export function Register() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    //function para dar registo ao user (async significa que é uma function demorada, vai ter um await)
    console.log({
      //teste logs
      nome,
      email,
      password,
    });
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: nome,
        },
      },
    });

    if (error) {
      if(error.message === "Anonymous sign-ins are disabled"){
              Alert.alert("Erro ao registar a conta", "Por favor preencha o formulário para criar conta");
      }else{
      Alert.alert("Erro ao registar a conta", error.message);
      }
      console.log(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigation.navigate("LoginEmail");
  }

  return (
    <LinearGradient
      colors={["#6578e7", "#1b88df"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[
          globalStyles.container,
          {
            paddingTop: insets.top > 0 ? insets.top : 20,
            paddingBottom: insets.bottom > 0 ? insets.bottom + 20 : 40,
          },
        ]}
      >
        <Image
          source={require("../../../assets/WiseWallet_logo.png")}
          style={globalStyles.logoScreens}
        />
        <Image
          source={require("../../../assets/WiseWallet_texto.png")}
          style={globalStyles.logoTextScreens}
        />
        <Text style={globalStyles.title}>Criar conta</Text>

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

        <IconAppButton
          titulo={loading ? "A Carregar" : "Criar Conta"}
          onPress={handleSignUp}
          buttonStyle={globalStyles.btnNoIcon}
        />
        <Text style={styles.text}>Já tem conta?</Text>

        <Pressable onPress={() => navigation.navigate("Login")}>
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
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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
