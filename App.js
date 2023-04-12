import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, StyleSheet } from "react-native";
import Container from "./src/components/Container";
import Button from "./src/components/Button";
import routes from "./routes";
import SignUp from "./src/screens/signUp";
import SignIn from "./src/screens/signIn";
import HomeScreen from "./src/screens/homeScreen"

function WelcomeScreen({ navigation }) {
  return (
    <Container>
      <View style={styles.containerImage}>
        <Image source={{ uri: "https://images.vexels.com/media/users/3/306120/isolated/preview/cc0dcf7bb9558b5e830d528e946617e7-siempre-bienvenido-letras-de-sentimiento.png" }} style={styles.logo} />
      </View>
      <View style={styles.container}>
        <View style={styles.containerTexts}>
          <Text style={styles.welcomeText}>
            ¿Quieres Empezar?
          </Text>
          <Text style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, accusamus.</Text>
        </View>
        <View style={styles.containerButtons}>
          <Button title={"Empezemos"} onPress={() => navigation.navigate(routes.signUp)} />
          <Button title={"Ya tengo una cuenta"} onPress={() => navigation.navigate(routes.signIn)} />
        </View>
      </View>
    </Container>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.welcome} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.welcome} component={WelcomeScreen} />
        <Stack.Screen name={routes.signUp} component={SignUp} />
        <Stack.Screen name={routes.signIn} component={SignIn} />
        <Stack.Screen name={routes.home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%"
  },
  containerImage: {
    flex: 2,
  },
  container: {
    flex: 1,
  },
  containerButtons: {
    marginVertical: 15,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  paragraph: {
    opacity: .5,
    marginTop: 10,
    marginBottom: 15,
    textAlign: "center"
  },
})