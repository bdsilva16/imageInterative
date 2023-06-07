import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props{
    titleApp:string 
}

interface State{
 
}

export default class TitleComponent extends React.Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.titleApp}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
    
    },

    title:{
        marginTop:60,
        fontSize:20,
        fontWeight: 'bold',
        textAlign:'center',
        margin:100
    }

})