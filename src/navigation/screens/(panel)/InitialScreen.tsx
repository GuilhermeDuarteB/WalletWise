import { View, Text, StyleSheet, Image, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { IconAppButton } from "../../../components/IconAppButton";
import { supabase } from "../../../lib/supabase";
import { useAuth } from "../../../contexts/AuthContext";
import { globalStyles } from "../../../styles/globalStyles";

export function InitialScreen() {
  const { user } = useAuth();

  const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const mesesAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const hoje = new Date();
  const nomeDia = diasDaSemana[hoje.getDay()];
  const diaDoMes = hoje.getDate();
  const nomeMes = mesesAno[hoje.getMonth()];
  const ano = hoje.getFullYear();

  // dados user auth
  const nome =
    user?.user_metadata?.name ?? user?.user_metadata?.full_name ?? "Utilizador";

  const userImg =
    user?.user_metadata?.avatar_url ?? user?.user_metadata?.picture;

  // Terminar sessão
  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert("Erro", "Erro ao tentar sair da conta.");
      console.log("erro logou:", error.message);
      return;
    }

    console.log("sessao terminada");
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={globalStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={globalStyles.headerRow}>
          <View style={styles.content}>
            <View style={styles.bolaEsquerda} />
            <View style={styles.bolaDireita} />
            <Text style={[styles.textBold, { marginBottom: -5 }]}>Olá,</Text>
            <Text
              style={[styles.textBold, { marginLeft: -5, color: "#2541df" }]}
            >
              {" "}
              {nome}!
            </Text>
            <Text style={globalStyles.secundaryText}>
              {nomeDia}, {diaDoMes} de {nomeMes} de {ano}
            </Text>
          </View>

          {userImg && (
            <Image source={{ uri: userImg }} style={styles.userImage} />
          )}
        </View>

        <IconAppButton
          titulo="Sair"
          simbolo={require("../../../assets/back_arrow.png")}
          onPress={handleSignOut}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: 12,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 26,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 20,
    borderColor: "#1b88df",
    borderWidth: 3,
  },
  bolaEsquerda: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#E2EFFF",
    top: -20,
    left: -120,
  },

  bolaDireita: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#E2EFFF",
    top: 90,
    right: -225,
  },
});
