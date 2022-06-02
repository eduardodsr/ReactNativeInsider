import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Search() {
    return(
        <View style={styles.container}>
            <Text>Página de Busca</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})