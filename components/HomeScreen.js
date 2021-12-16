import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export const HomeScreen= () =>{
  const navigation= useNavigation();
  function Login(){
    navigation.navigate('Photos')
  
  }
 
  return(
    
    <View style={styles.container}>
       <FontAwesome5 name="fire" size={90} color="white">tinder</FontAwesome5>
       
       
          <Text style={styles.text}></Text>  
         
         <TextInput 
         style={styles.input}
         placeholder="Digite seu email..."
         />
         <TextInput 
         style={styles.input}
         secureTextEntry={true}
         placeholder="Digite sua senha..."
         />
         
         <TouchableOpacity style={styles.button}
           onPress={() => Login()} >
           
           <Text style={styles.buttonText}>ENTRAR</Text>
         </TouchableOpacity>
       </View>
     
   )
 }
 




const styles= StyleSheet.create({
  container:{
    backgroundColor: "#fa496e",
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
    
  },
  text:{
    color:"white",
        fontSize: 30,
        fontWeight: 'bold'
  },
  input: {
    marginTop: 10,
    padding:10,
    borderRadius: 30,
    width: 300,
    fontSize: 18,
    backgroundColor: "#fff",
  }, 
 button: {
   width: 300,
   height: 50,
   backgroundColor: "#fa496e",
   marginTop: 10,
   borderRadius: 30,
   alignItems: "center",
   justifyContent: "center",
   borderWidth: 3,
   borderColor: "#fff"
 },
 
 buttonText: {
   fontSize: 18,
   fontWeight: "bold",
   color: "#fff"
 }

 
})