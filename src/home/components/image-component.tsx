import React, { useState } from "react";
import { View, Image, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


interface Props {
    propsImage: any
}


export default function ImageComponent(props: Props) {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.propsImage} />
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
    }
   
});