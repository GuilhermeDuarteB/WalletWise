
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { globalStyles } from "../../../styles/globalStyles";
import { IconAppButton } from "../../../components/IconAppButton";

export function InitialScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#6578e7", "#1b88df"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[globalStyles.container, styles.container]}
    >
      <View pointerEvents="none" style={styles.bolaEsquerda} />
      <View pointerEvents="none" style={styles.bolaDireita} />

      <Image
        source={require("../../../assets/WiseWallet_logo.png")}
        style={globalStyles.logoScreens}
      />

      <Image
        source={require("../../../assets/WiseWallet_texto.png")}
        style={globalStyles.logoTextScreens}
      />

      <Text style={globalStyles.slogan}>
        Cada despesa conta.
      </Text>

      {/* lista frase */}
      <View style={styles.featuresContainer}>

        {/* primeira frase */}
        <View style={styles.featureRow}>
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: "#E8EDFF" },
            ]}
          >
            <Ionicons
              name="create-outline"
              size={24}
              color="#3154F4"
            />
          </View>

          <Text style={styles.featureText}>
            Regista as tuas despesas
          </Text>
        </View>

        {/* segunda frase */}
        <View style={styles.featureRow}>
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: "#DDF8F0" },
            ]}
          >
            <Ionicons
              name="stats-chart-outline"
              size={24}
              color="#00B894"
            />
          </View>

          <Text style={styles.featureText}>
            Visualiza o teu progresso
          </Text>
        </View>

        {/* terceira frase */}
        <View style={styles.featureRow}>
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: "#FFF2DC" },
            ]}
          >
            <Ionicons
              name="ribbon-outline"
              size={24}
              color="#FF9800"
            />
          </View>

          <Text style={styles.featureText}>
            Cria melhores hábitos financeiros
          </Text>
        </View>
      </View>

      {/* btn criar */}
      <IconAppButton
        titulo="Começar"
        onPress={() => navigation.navigate("Register")}
      />

      {/* btn login */}
      <Pressable
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>
          Já tenho conta
        </Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    paddingHorizontal: 20,
  },

  // Bolas decorativas
  bolaEsquerda: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#E2EFFF",
    opacity: 0.25,
    top: -20,
    left: -120,
  },

  bolaDireita: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#E2EFFF",
    opacity: 0.25,
    top: 90,
    right: -120,
  },

  // Funcionalidades
  featuresContainer: {
    width: "100%",
    maxWidth: 320,
    gap: 20,
    marginTop: 25,
    marginBottom: 35,
  },

  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  featureText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: 20,
  },

  loginText: {
    color: "#FFFFFF",
    marginTop: 7,
    fontSize: 15,
    textAlign: "center",
  },
});
