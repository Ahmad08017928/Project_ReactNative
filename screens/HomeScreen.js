import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.imgur.com/9F8U6dN.jpg' }} 
      style={styles.container}
      blurRadius={2}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Tugas App</Text>
        
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#FF6B6B' }]}
          onPress={() => navigation.navigate('Biodata')}
        >
          <Text style={styles.buttonText}>Biodata</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#4ECDC4' }]}
          onPress={() => navigation.navigate('Percabangan')}
        >
          <Text style={styles.buttonText}>Cek Angka</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#FFBE0B' }]}
          onPress={() => navigation.navigate('VolumeBalok')}
        >
          <Text style={styles.buttonText}>Volume Balok</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});