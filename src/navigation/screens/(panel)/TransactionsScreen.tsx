import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";


export function TransactionsScreen() {
  return (
     <SafeAreaView style={globalStyles.containerInitial}>
          <ScrollView
            style={globalStyles.scrollView}
            contentContainerStyle={globalStyles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={globalStyles.headerRow}>
              <View style={globalStyles.content}>
                <Text style={[globalStyles.textBold, globalStyles.rowText]}>Transações</Text>
              </View>
            </View>
    
          </ScrollView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0521c2",
  },
});