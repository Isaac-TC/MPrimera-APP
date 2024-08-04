import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { ButtonComponet } from '../components/ButtonComponet';

export const CounterScreen = () => {
    const [counter, setCounter] = useState<number>(10);
    
     return (
       <View style={styles.container}>
            <Text style={styles.title}>Contador: {counter}</Text>
            {/*<TouchableOpacity
                style={styles.buttonL}
                onPress={() => setCounter(counter + 1)}>
                <Text style={styles.buttonText}> +1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={() => setCounter(counter - 1)}
                    style={styles.buttonR}>
                    <Text style={styles.buttonText}>-1</Text>
                </TouchableOpacity>*/}
            <ButtonComponet 
            title='+1' 
            setCounter={()=> setCounter(counter + 1)}
            />
                <ButtonComponet
                 title='-1' 
                 setCounter={()=> setCounter(counter - 1)} 
                 position='br'/>
            
        </View>
        
    )
}
//gestionar estilos 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        top: -50
    },


});
