import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fbb827",
        color: "#000",
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 16,
    },
    text: {
        textAlign: "center",
    }
})