import {
  View,
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

export function LoginEmail() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignIn(){ //function para dar registo ao user
    console.log({ //teste logs
      email,
      password
    })

    setLoading (true);

    const {data, error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if(error){
      Alert.alert("Erro ao logar", error.message)
      setLoading(false)
      console.log(error.message)
      return
    }

    setLoading(false)
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
        <Text style={globalStyles.slogan}>Cada despesa conta.</Text>
        <Text style={globalStyles.subtitle}>
          Por favor insere os teus dados para continuar
        </Text>

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
          titulo= {loading ? "A Entrar..." : "Entrar"}
          onPress={handleSignIn}
          buttonStyle={globalStyles.btnNoIcon}
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
