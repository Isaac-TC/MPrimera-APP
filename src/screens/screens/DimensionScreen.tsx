import React from 'react'
import { StyleSheet, View, Dimensions, Text, useWindowDimensions } from 'react-native'

export const DimensionScreen = () => {
    //tomar dimencion de la pantalla
    //const { width, height } = Dimensions.get('window');
    //console.log(dimencio.height);
    //console.log(dimencio.width);
    // hook useWindowsDimension: captura dimencion de la pantalla
    const { width, height} = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.boxPurple,
                    width: width * 0.20
                    }}></View>
                <View style={styles.boxOrange}></View>
            </View>
            <Text style={styles.title}>W: {width} - H {height}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 45,
        height: 600,
        backgroundColor: 'red'


    },
    boxPurple: {
        backgroundColor: 'purple',
       // width: '50%',
        height: '50%'
    },
    boxOrange: {
        backgroundColor: 'orange'

    },
    title:{
        fontSize:30
    }
});