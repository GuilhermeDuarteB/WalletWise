import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconAppButton } from "../../components/IconAppButton";



export function InitialScreen(){
  const navigation = useNavigation();
return(
<View style={[styles.container, styles.initialBackground]}>
    <Text style={{color:"red"}}>
        Ola
    </Text>
    <IconAppButton 
    titulo="Voltar"
    simbolo={require("../../assets/back_arrow.png")}
    onPress={() => navigation.navigate("Home")}/>
</View>
);
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  initialBackground:{
    backgroundColor: "white",
  }
})