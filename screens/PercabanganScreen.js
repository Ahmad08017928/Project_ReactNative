import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated } from 'react-native';

export default function PercabanganScreen() {
  const [nilai, setNilai] = useState('');
  const [hasil, setHasil] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  const cekGanjilGenap = () => {
    const number = parseInt(nilai, 10);
    if (isNaN(number)) {
      setHasil('Masukkan angka yang valid.');
      return;
    }

    if (number % 2 === 1) {
      setHasil('Nilai GANJIL');
    } else {
      setHasil('Nilai GENAP');
    }

    // Animasi
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0.8,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cek Nilai Ganjil/Genap</Text>
      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Masukkan nilai"
        placeholderTextColor="#999"
        value={nilai}
        onChangeText={setNilai}
      />
      
      <TouchableOpacity style={styles.button} onPress={cekGanjilGenap}>
        <Text style={styles.buttonText}>Cek Angka</Text>
      </TouchableOpacity>

      {hasil !== '' && (
        <Animated.View style={[styles.resultContainer, { opacity: fadeAnim }]}>
          <Text style={styles.resultText}>{hasil}</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});