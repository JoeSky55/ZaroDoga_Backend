import React from 'react';
import { View, Text, Button, Image, StyleSheet, SafeAreaView } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, alignItems: "center"}} >
      <Image source={require('../kepek/logo.jpg')} style={styles.logo} />
      </View>
      <View style={{flex: 6}}>
      
          <Button style={styles.gombok} title="Időpontfoglalás" onPress={() => navigation.navigate("Időpontfoglalás")} /> 
          <Button style={styles.gombok}title="Rendelőnk" onPress={() => navigation.navigate("Rendelőnk")}/> 
          <Button style={styles.gombok}title="Orvosaink" onPress={() => navigation.navigate("Orvosaink")}/> 
          <Button style={styles.gombok}title="Kapcsolat" onPress={() => navigation.navigate("Kapcsolat")}/> 
        
     </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  logo:{
    width:'80%',
    height:'80%',
    resizeMode: 'contain'
    
  },
  logo_box:{
    width:'100%',
    height: 'auto',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'red'
  },
  gombok:{
    backgroundColor: 'blue'
  }
});