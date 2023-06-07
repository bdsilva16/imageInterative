import React from "react";
import {  View, Text, StyleSheet, TouchableOpacity } from "react-native";


interface Props {
    onImageChange: any
    handlePress: any

}



export default function ButtonComponent(props: Props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => { props.handlePress(); }}>
                <Text style={styles.buttonText}>Clique</Text>
            </TouchableOpacity>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200,
        
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'red',
        borderWidth: 5,
      


    },
    buttonText: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
       
    },
    // button: {
    //     backgroundColor: '#f4511e',
    //     borderRadius: 5,
    //     paddingVertical: 10,
    //     paddingHorizontal: 20,
    //     marginTop: 10,
    // },

    // buttonText: {
    //     color: 'black',
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    // },

})