import { ActivityIndicator, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export default function loading(){
    return(
        <View style={[globalStyles.container, {backgroundColor: "white"}]}>
            <ActivityIndicator size={54} color={"#1b88df"}/>
        </View>
    )
}