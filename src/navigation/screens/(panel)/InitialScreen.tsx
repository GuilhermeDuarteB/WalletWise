import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconAppButton } from "../../../components/IconAppButton";
import { supabase } from "../../../lib/supabase";
import { useAuth } from "../../../contexts/AuthContext";



export function InitialScreen(){
  const navigation = useNavigation();
  const {setAuth, user} = useAuth();

  async function handleSignOut(){
   const {error} = await supabase.auth.signOut();
   setAuth(null)

   if (error){
    Alert.alert("Erro", "Erro ao tentar sair da conta")
    console.log(error.message)
    return
   }
  }


return(
<View style={[styles.container, styles.initialBackground]}>
    <Text style={{color:"red"}}>
        {user?.email}
    </Text>
    <IconAppButton 
    titulo="Sair"
    simbolo={require("../../../assets/back_arrow.png")}
    onPress={handleSignOut}/>
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