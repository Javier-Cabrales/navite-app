import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Container from "../components/Container";
import React, { useState } from "react"
import Button from "../components/Button"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import routes from "../../routes";

export default function SignIn({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Container>
            <Text style={styles.title}>
                Hola de nuevo {"\n"}
                <Text style={{ fontWeight: "200" }}>
                    Bienvenido de vuelta se te ha echado de menos
                </Text>
            </Text>
            <View style={styles.containerInputs}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Correo electronico"
                    onChangeText={email => setEmail(email)}
                    value={email}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Contraseña"
                    onChangeText={password => setPassword(password)}
                    value={password}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.paragraph}>
                    Recuperar contraseña
                </Text>
            </TouchableOpacity>
            <Button title={"Iniciar secion"} onPress={() => navigation.navigate(routes.home)} />
            <View style={styles.containerIcons}>
                <View style={styles.iconsItems}>
                    <FontAwesome
                        name="google"
                        size={30}
                        style={styles.icon}
                    />
                    <Text>Continua con Google</Text>
                </View>
                <View style={styles.iconsItems}>
                    <FontAwesome
                        name="facebook"
                        size={30}
                        style={styles.icon}
                    />
                    <Text>Continua con Facebook</Text>
                </View>
                <View style={styles.iconsItems}>
                    <FontAwesome
                        name="apple"
                        size={30}
                        style={styles.icon}
                    />
                    <Text>Continua con Apple</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate(routes.signUp)}>
                    <Text style={styles.register}>
                        ¿No eres un miembro?
                        <Text style={{ color: "#0000ff" }}>
                            Rejistrate ahora
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20
    },
    textInput: {
        backgroundColor: "#ffffff",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 12.5,
        marginTop: 15,
        color: "#000",
        fontWeight: "bold"
    },
    containerInputs: {
        marginVertical: 20,
    },
    paragraph: {
        opacity: .5,
        marginBottom: 15,
        textAlign: "right"
    },
    containerIcons: {

    },
    icon: {
        marginHorizontal: 15
    },
    iconsItems: {
        display: "flex",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        paddingVertical: 7,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    register: {
        marginTop: 80,
        textAlign: "center"
    }
})