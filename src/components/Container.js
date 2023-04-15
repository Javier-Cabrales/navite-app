import React from "react"
import { StyleSheet, View } from 'react-native';
import PropTypes from "prop-types"

export default function Container({ children }) {
    return (
        <View style={styles.container}>{children}</View>
    )
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 15,
        paddingVertical: 20
    }
})