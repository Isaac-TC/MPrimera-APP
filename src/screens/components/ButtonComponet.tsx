import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

//recibir propiedades de un componente 
//interface definir propiedades 
interface Props{
    title: string;
    position?: string;
    setCounter: ()=> void;
}

//componente reutilizable
export const ButtonComponet = ({title, position, setCounter}: Props) => {
   // console.log(title);
  return (
    
            <TouchableOpacity
                style={[styles.button,
                    (position ==='br'
                        ? styles.rigth
                        :styles.left
                    )
                ]}
               
                onPress={ setCounter}>
                <Text style={styles.buttonText}> {title}</Text>
            </TouchableOpacity>
  )
}
// gestionar stilos 
const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        backgroundColor: '#10195f',
        width: 70,
        height: 70,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 25,
    
    },
    rigth:{
        right:10
    },
    left: {
        left:10
    },
   
    buttonText:{
        color:'white',
        fontSize: 25,
        alignSelf: 'center'
    
    },
})

