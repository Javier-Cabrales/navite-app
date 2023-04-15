import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types"

export default function Button({ title, desable, style, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.button, style, desable && styles.desableButton]}
            onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    desable: PropTypes.bool,
    style: PropTypes.object
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fbb827",
        color: "#000",
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 16,
    },
    buttonText: {
        textAlign: "center",
    },
    desableButton: {
        opacity: 0.5,
    }
})