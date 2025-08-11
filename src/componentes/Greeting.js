import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const GreetingScreen = () => {
  return (
    <View style={styles.container}>
      {/* Puedes cambiar el logo por el de tu app */}
      <Image 
        source={require('../../assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>¡Bienvenido/a!</Text>
      <Text style={styles.subtitle}>
        Gracias por usar nuestra app. Esperamos que tengas una excelente experiencia.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
});

export default GreetingScreen;