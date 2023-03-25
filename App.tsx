import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookingPage from "./Pages/BookingPage";
import CrowdView from "./Pages/CrowdView";
import HomeScreen from "./Pages/HomePage";
import LoginScreen from "./Pages/Login";
import ConfirmationPage from "./Pages/ConfirmationPage";
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CrowdView" component={CrowdView} />
        <Stack.Screen name="BookingPage" component={BookingPage} />
        <Stack.Screen name="Confirmation" component={ConfirmationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
