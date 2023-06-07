import React, { useState } from "react";
import { View, Image, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function App() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        require("../../../assets/adaptive-icon.png"),
        require("../../../assets/favicon.png"),
        require("../../../assets/icon.png"),
    ];

    const handlePress = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={images[currentImageIndex]} />
            <TouchableOpacity style={styles.button} onPress={() => { handlePress(); }}>
                <Text style={styles.buttonText}>Clique</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 200
    },
    image: {
        width: 200,
        height: 200,
    },
    button: {
        backgroundColor: '#f4511e',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },

    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});