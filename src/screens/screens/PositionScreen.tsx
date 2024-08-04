import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={style.container}>
            <View style={style.boxPurple}></View>
            <View style={style.boxOrange}></View>
            <View style={style.boxoGreen}></View>

        </View>
    )
}
// gestion estilos 
const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#44becf',
        flexDirection: 'row',// definir la direccion de los elementos 
        justifyContent:'center', // justificar los elementos 
        alignItems:'flex-start',  //alinear el contenido  
        flexWrap:'wrap' // alinea de forma repetitoria en la pantalla
         
    },
    boxPurple: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 10,
        borderColor: 'white',
       // position: 'relative',
        //top: 130,
        //left: 50,
        position: 'absolute',
        top : 0,
        right:0
    },
    boxOrange: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white',
        //top: -60
        position: 'absolute',
        bottom : 0,
        right: 0
    },
    boxoGreen: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        //top: -60
        position: 'absolute',
        bottom : 0,
        left: 0,
        right:0,
        top: 0
    }

});