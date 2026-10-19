import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { InitialScreen } from "./screens/(panel)/InitialScreen";
import { TransactionsScreen } from "./screens/(panel)/TransactionsScreen";

function PlaceholderScreen({ titulo }: { titulo: string }) {
  return (
    <View style={style.placeholder}>
      <Text style={style.title}>{titulo}</Text>
    </View>
  );
}

function AddExpenseScreen() {
  return <PlaceholderScreen titulo="Adicionar despesa" />;
}

function StatisticsScreen() {
  return <PlaceholderScreen titulo="Estatísticas" />;
}

function MoreScreen() {
  return <PlaceholderScreen titulo="Mais" />;
}

// bottom menu
const Tabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    animation: "fade",
    transitionSpec: {
      animation: "timing",
      config: {
        duration: 250,
      },
    },
    tabBarActiveTintColor: "#0521c2",
    tabBarInactiveTintColor: "#8A8A8A",
    tabBarStyle: {
      backgroundColor: "#FFFFFF",
      borderTopColor: "#EEEEEE",
      height: 65,
      paddingTop: 4,
      overflow: "visible",
    },
    tabBarLabelStyle: {
      fontSize: 11,
      fontWeight: "600",
    },
  },

  screens: {
    Inicio: {
      screen: InitialScreen,
      options: {
        title: "Início",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? "home" : "home-outline"}
            color={color}
            size={size}
          />
        ),
      },
    },

    Transacoes: {
      screen: TransactionsScreen,
      options: {
        title: "Transações",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? "list" : "list-outline"}
            color={color}
            size={size}
          />
        ),
      },
    },

    Adicionar: {
      screen: AddExpenseScreen,
      options: {
        title: "",
        tabBarLabel: () => null,

        tabBarIcon: () => (
          <View style={styles.addButton}>
            <Ionicons name="add" size={34} color="#FFFFFF" />
          </View>
        ),
      },
    },

    Estatisticas: {
      screen: StatisticsScreen,
      options: {
        title: "Estatísticas",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? "stats-chart" : "stats-chart-outline"}
            color={color}
            size={size}
          />
        ),
      },
    },

    Mais: {
      screen: MoreScreen,
      options: {
        title: "Mais",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={
              focused ? "ellipsis-horizontal" : "ellipsis-horizontal-outline"
            }
            color={color}
            size={size}
          />
        ),
      },
    },
  },
});

export default Tabs;

const style = StyleSheet.create({
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0521c2",
  },
});

const styles = StyleSheet.create({
  addButton: {
    width: 64,
    height: 64,
    borderRadius: 32,

    backgroundColor: "#0521C2",

    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: -35,

    borderWidth: 4,
    borderColor: "#FFFFFF",

    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
  },
});
