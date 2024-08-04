import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScrenn = () => {
  return (
   <View style={styles.container}>
    <Text style={styles.box1}>Caja 1</Text>
    <Text style={styles.box2}>Caja 2</Text>
    <Text style={styles.box3}>Caja 3</Text>

   </View>
  )
}
// gestion de st6ilos 
const styles = StyleSheet. create({
    container:{
        flex: 1,
        //height:600,
        marginTop: 50,
        backgroundColor: '#44becf',
        flexDirection: 'row',// definir la direccion de los elementos 
        justifyContent:'center', // justificar los elementos 
        alignItems:'flex-start',  //alinear el contenido  
        flexWrap:'wrap' // alinea de forma repetitoria en la pantalla
        
    },
    box1:{
       // flex: 1,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        //alignSelf:'center'  // alinear un elementior de manera individual
    },
    box2:{
        //flex: 2,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        //alignSelf: 'flex-start'

    },
    box3:{
        //flex: 3,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        //alignSelf: 'flex-end'
    }

})