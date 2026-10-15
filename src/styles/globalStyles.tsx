import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
    slogan:{
        fontSize: 20,
        color: "white",
        marginBottom: 10,
        marginTop: -5
    },
    subtitle: {
    fontSize: 16,
    color: "#dad4d4",
    marginBottom: 5,
  },
    btnNoIcon:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '55%',
    },
    logoScreens:{
        width: 170,
        height: 163,
        resizeMode: "contain"
    },
    logoTextScreens:{
      width: 250,
      height: 55,
      marginTop: 8,
      marginBottom: 5,
      resizeMode: "contain"
    }
})