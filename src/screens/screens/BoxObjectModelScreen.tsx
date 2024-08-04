import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Modelo de caja</Text>
    
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        marginTop: 50,
        flex: 1,
        backgroundColor: 'red'
    },
    title: {
        fontSize: 30,
        //width: 150,
        borderWidth: 10,
        //padding:50
        paddingHorizontal: 100,
        paddingVertical: 40,
        //marginRight:20,
//       marginLeft: 20
        marginHorizontal:20
        //backgroundColor: 'red'
    }
});
