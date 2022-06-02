import React  from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function Home() {

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.name}>DevBlog</Text>

                <TouchableOpacity>
                    <Feather name="search" size={26} color="#FFF" />
                </TouchableOpacity>
            </View>
            
            {/*             
            <Text>Página Home</Text>
            <Button
                title="Ir para detalhes"
                onPress={ ()=> navigation.navigate("Detail") }
            />
            <Button
                title="Ir para categorias"
                onPress={ ()=> navigation.navigate("Category") }
            />
            <Button
                title="Ir para procurando"
                onPress={ ()=> navigation.navigate("Search") }
            /> 
            */}
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232630"
        // alignItems: "center",
        // justifyContent: "center"
    },
    header:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 18,
        marginTop: 18,
        marginBottom: 24
    },
    name: {
        fontSize: 25,
        color: "#FFF",
        fontWeight: "bold"
    }
})