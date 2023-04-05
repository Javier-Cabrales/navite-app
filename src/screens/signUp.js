import { Text, StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Container from "../components/Container";
import Button from "../components/Button"
import React, { useState } from "react";
import routes from "../../routes"

export default function SignUp({ navigation }) {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repetePassword, setRepetePassword] = useState("")

    const handlerOnpress = () => {
        console.log(firstname, lastname, email, password, repetePassword);
    }

    return (
        <Container>
            <Text style={styles.title}>Create una cuenta</Text>
            <View style={styles.containerInputs}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nombre"
                    onChangeText={firstname => setFirstName(firstname)}
                    value={firstname}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Epellido"
                    onChangeText={lastName => setLastName(lastName)}
                    value={lastname}
                />
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
                <TextInput
                    style={styles.textInput}
                    placeholder="Repetir contraseña"
                    onChangeText={repetePassword => setRepetePassword(repetePassword)}
                    value={repetePassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
            </View>
            <Button title={"Crear cuenta"} onPress={handlerOnpress} />
            <TouchableOpacity onPress={() => navigation.navigate(routes.signIn)}>
                <Text style={styles.paragraph}>Ya tengo una cuenta</Text>
            </TouchableOpacity>
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
    containerInputs: {
        marginVertical: 20,
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
    paragraph: {
        opacity: .5,
        marginBottom: 15,
        textAlign: "center"
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
    }
})