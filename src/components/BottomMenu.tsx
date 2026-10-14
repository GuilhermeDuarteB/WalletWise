import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type MenuPage = "Dashboard" | "Transações" | "Estatisticas" | "Mais";
{
  /* definir paginas */
}

type BottomMenuProps = {
  activatePage: MenuPage; //pagina inicial
  onNavigate: (page: MenuPage) => void; //vai receber a pagina que tem de mudar
  onAddPress: () => void;
};

const menuItems = [
  {
    page: "Dashboard",
    title: "Início",
    icon: "home-outline",
    activateIcon: "home",
  },
  {
    page: "Transactions",
    title: "Transições",
    icon: "list-outline",
    activeIcon: "list",
  },
  {
    page: "Statistics",
    title: "Estatisticas",
    icon: "stats-chart-outline",
    activeIcon: "stats-chart",
  },
  {
    page: "More",
    title: "Mais",
    icon: "ellipsis-horizontal-outline",
    activeIcon: "ellipsis-horizontal",
  },
] as const;


export function BottomMenu({activatePage,onNavigate,onAddPress}: BottomMenuProps){
    function renderMenuItem(item: (typeof menuItems)[number]){
        const isActive = activatePage === item.page;

        return(
            <Pressable>
                
            </Pressable>
        );
    }
}