import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IconAppButton } from "../../components/IconAppButton";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#0521c2", "#1b88df"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image source={require("../../assets/walletwise-logo.png")}
      style={{width:280, height:220, resizeMode: "contain"}}/>
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
      <Text style={styles.text}>
        Ainda sem conta? 
      </Text>
      <Text style={{
        color:"#FFF",
        marginTop: 5,
        textDecorationLine: "underline",
      }}>
        Criar Conta 
      </Text>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
    color: "#dad4d4",
  },
  text:{
    fontSize:15,
    color: "#fff",
    marginTop:10,
  }
});
