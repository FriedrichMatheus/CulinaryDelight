import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { allRecipes } from "./CulinaryDelightApp/services/dbRead";
import Home from "./CulinaryDelightApp/pages/PaginaInicial";
import "./assets/logo-culinary-delight.png";
import "./assets/menu-aberto.png";

const tab = createBottomTabNavigator();

export default function App() {
  const [loaded] = useFonts({
    MontserratBlack: require("./assets/fonts/Montserrat-Black.ttf"),
    MontserratBlackItalic: require("./assets/fonts/Montserrat-BlackItalic.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    MontserratBoldItalic: require("./assets/fonts/Montserrat-BoldItalic.ttf"),
    MontserratExtraBold: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    MontserratExtraBoldItalic: require("./assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
    MontserratExtraLight: require("./assets/fonts/Montserrat-ExtraLight.ttf"),
    MontserratExtraLightItalic: require("./assets/fonts/Montserrat-ExtraLightItalic.ttf"),
    MontserratItalic: require("./assets/fonts/Montserrat-Italic.ttf"),
    MontserratLight: require("./assets/fonts/Montserrat-Light.ttf"),
    MontserratLightItalic: require("./assets/fonts/Montserrat-LightItalic.ttf"),
    MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    MontserratMediumItalic: require("./assets/fonts/Montserrat-MediumItalic.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratSemiBoldItalic: require("./assets/fonts/Montserrat-SemiBoldItalic.ttf"),
    MontserratThin: require("./assets/fonts/Montserrat-Thin.ttf"),
    MontserratThinItalic: require("./assets/fonts/Montserrat-ThinItalic.ttf"),
  });

  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name="LandingPage" component={Home} />
      </tab.Navigator>
    </NavigationContainer>
  );
}
