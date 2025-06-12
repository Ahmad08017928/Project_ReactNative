import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Animated,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PercabanganScreen() {
  const [nilai, setNilai] = useState('');
  const [hasil, setHasil] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(-50));

  const cekGanjilGenap = () => {
    const number = parseInt(nilai, 10);
    if (isNaN(number)) {
      setHasil('Masukkan angka yang valid');
      return;
    }

    if (number % 2 === 1) {
      setHasil('GANJIL');
    } else {
      setHasil('GENAP');
    }

    // Animasi
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();
  };

  const resetForm = () => {
    setNilai('');
    setHasil('');
    fadeAnim.setValue(0);
    slideAnim.setValue(-50);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kelompok 3</Text>
        <Text style={styles.headerSubtitle}>X RPL 1</Text>
      </View>

      <View style={styles.memberCard}>
        <View style={styles.memberRow}>
          <Ionicons name="person-circle" size={18} color="#6a1b9a" />
          <Text style={styles.memberText}>Paina Anggraini (30)</Text>
        </View>
        <View style={styles.memberRow}>
          <Ionicons name="person-circle" size={18} color="#6a1b9a" />
          <Text style={styles.memberText}>Dewi Sekar Ayu Andini (09)</Text>
        </View>
      </View>

      <View style={styles.mainCard}>
        <Text style={styles.title}>Cek Bilangan Ganjil/Genap</Text>
        
        <Text style={styles.subtitle}>Masukkan angka untuk memeriksa</Text>
        
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#aaa"
          value={nilai}
          onChangeText={setNilai}
        />
        
        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={[styles.button, styles.checkButton]} 
            onPress={cekGanjilGenap}
          >
            <Ionicons name="checkmark-circle" size={20} color="white" />
            <Text style={styles.buttonText}> Cek</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.resetButton]} 
            onPress={resetForm}
          >
            <Ionicons name="refresh" size={20} color="white" />
            <Text style={styles.buttonText}> Reset</Text>
          </TouchableOpacity>
        </View>

        {hasil !== '' && (
          <Animated.View style={[
            styles.resultContainer, 
            { 
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}>
            <Text style={styles.resultLabel}>Hasil:</Text>
            <Text style={[
              styles.resultText,
              hasil === 'GANJIL' ? styles.ganjil : styles.genap
            ]}>
              {hasil}
            </Text>
          </Animated.View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  memberCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  memberText: {
    marginLeft: 8,
    color: '#555',
    fontSize: 14,
  },
  mainCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fafafa',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 6,
  },
  checkButton: {
    backgroundColor: '#6a1b9a',
  },
  resetButton: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  resultContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  ganjil: {
    color: '#ff6b6b',
  },
  genap: {
    color: '#4ECDC4',
  },
});