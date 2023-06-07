import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

interface Props {
    lovetext: string
    imageLoveProps: any[]
}

interface State {

}

export default class LoveText extends React.Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.lovetext}
                </Text>
                <Image style={styles.image} source={this.props.imageLoveProps[0]}></Image>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {

        alignItems: "center",
        justifyContent: "center",
        marginTop: 150,
        margin: 10
    },


    title: {
        marginTop: 60,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 50
    },

    image: {
        width: 300,
        height: 300,
        margin:50
        

    }

});

