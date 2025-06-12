import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VolumeBalok({ navigation }) {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [volume, setVolume] = useState(null);
  const [scaleAnim] = useState(new Animated.Value(0));

  const calculateVolume = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    
    if (!isNaN(l) && !isNaN(w) && !isNaN(h)) {
      const vol = (l * w * h).toFixed(2);
      setVolume(vol);
      
      // Animasi
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    } else {
      setVolume("Masukkan semua dimensi dengan benar");
    }
  };

  const resetForm = () => {
    setLength('');
    setWidth('');
    setHeight('');
    setVolume(null);
    scaleAnim.setValue(0);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Kelompok 3</Text>
          <Text style={styles.headerSubtitle}>X RPL 1</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.memberContainer}>
            <Ionicons name="person" size={16} color="#555" />
            <Text style={styles.memberText}>Paina Anggraini (30)</Text>
          </View>
          <View style={styles.memberContainer}>
            <Ionicons name="person" size={16} color="#555" />
            <Text style={styles.memberText}>Dewi Sekar Ayu Andini (09)</Text>
          </View>
          <View style={styles.memberContainer}>
            <Ionicons name="person" size={16} color="#555" />
            <Text style={styles.memberText}>Siti Hatija (35)</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Kalkulator Volume Balok</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Panjang (cm)</Text>
            <TextInput 
              style={styles.input} 
              keyboardType="numeric" 
              value={length} 
              onChangeText={setLength} 
              placeholder="0" 
              placeholderTextColor="#aaa" 
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Lebar (cm)</Text>
            <TextInput 
              style={styles.input} 
              keyboardType="numeric" 
              value={width} 
              onChangeText={setWidth} 
              placeholder="0" 
              placeholderTextColor="#aaa" 
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tinggi (cm)</Text>
            <TextInput 
              style={styles.input} 
              keyboardType="numeric" 
              value={height} 
              onChangeText={setHeight} 
              placeholder="0" 
              placeholderTextColor="#aaa" 
            />
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={[styles.button, styles.calculateButton]} 
              onPress={calculateVolume}
            >
              <Ionicons name="calculator" size={20} color="white" />
              <Text style={styles.buttonText}> Hitung</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.resetButton]} 
              onPress={resetForm}
            >
              <Ionicons name="refresh" size={20} color="white" />
              <Text style={styles.buttonText}> Reset</Text>
            </TouchableOpacity>
          </View>

          {volume && (
            <Animated.View 
              style={[
                styles.resultContainer, 
                { transform: [{ scale: scaleAnim }] }
              ]}
            >
              <Text style={styles.resultLabel}>Hasil Volume:</Text>
              <Text style={styles.result}>{volume} cm³</Text>
            </Animated.View>
          )}
        </View>

        <View style={styles.navButtons}>
          <TouchableOpacity 
            style={styles.navButton} 
            onPress={() => navigation.navigate('Biodata')}
          >
            <Ionicons name="person-circle" size={20} color="#6a1b9a" />
            <Text style={styles.navButtonText}> Biodata</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navButton} 
            onPress={() => navigation.navigate('Percabangan')}
          >
            <Ionicons name="school" size={20} color="#6a1b9a" />
            <Text style={styles.navButtonText}> Cek Angka</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
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
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    width: "100%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  memberText: {
    marginLeft: 8,
    color: '#555',
    fontSize: 14,
  },
  title: { 
    fontSize: 20, 
    fontWeight: "600", 
    color: "#333", 
    textAlign: "center", 
    marginBottom: 20,
  },
  inputContainer: { 
    marginBottom: 16,
  },
  label: { 
    fontSize: 14, 
    marginBottom: 8, 
    color: "#555", 
    fontWeight: "500" 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#e0e0e0", 
    borderRadius: 8, 
    padding: 12, 
    backgroundColor: "#fafafa",
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 6,
  },
  calculateButton: {
    backgroundColor: "#6a1b9a",
  },
  resetButton: {
    backgroundColor: "#555",
  },
  buttonText: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "500" 
  },
  resultContainer: { 
    marginTop: 16, 
    padding: 16, 
    backgroundColor: "#f0f0f0", 
    borderRadius: 8, 
    alignItems: "center" 
  },
  resultLabel: { 
    fontSize: 14, 
    color: "#555", 
    marginBottom: 4 
  },
  result: { 
    fontSize: 20, 
    fontWeight: "600", 
    color: "#6a1b9a" 
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  navButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  navButtonText: {
    color: '#6a1b9a',
    fontWeight: '500',
  },
});