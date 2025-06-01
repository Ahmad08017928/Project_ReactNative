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
        <View style={styles.card}>
          <Text style={styles.title}>Kalkulator Volume Balok</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Panjang:</Text>
            <TextInput 
              style={styles.input} 
              keyboardType="numeric" 
              value={length} 
              onChangeText={setLength} 
              placeholder="Masukkan panjang" 
              placeholderTextColor="#aaa" 
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Lebar:</Text>
            <TextInput 
              style={styles.input} 
              keyboardType="numeric" 
              value={width} 
              onChangeText={setWidth} 
              placeholder="Masukkan lebar" 
              placeholderTextColor="#aaa" 
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tinggi:</Text>
            <TextInput 
              style={styles.input} 
              keyboardType="numeric" 
              value={height} 
              onChangeText={setHeight} 
              placeholder="Masukkan tinggi" 
              placeholderTextColor="#aaa" 
            />
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity style={[styles.button, styles.calculateButton]} onPress={calculateVolume}>
              <Text style={styles.buttonText}>Hitung Volume</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetForm}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>

          {volume && (
            <Animated.View 
              style={[
                styles.resultContainer, 
                { transform: [{ scale: scaleAnim }] }
              ]}
            >
              <Text style={styles.resultLabel}>Volume Balok:</Text>
              <Text style={styles.result}>{volume} unit³</Text>
            </Animated.View>
          )}

          <View style={styles.navButtons}>
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => navigation.navigate('Biodata')}
            >
              <Text style={styles.navButtonText}>Biodata</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => navigation.navigate('Percabangan')}
            >
              <Text style={styles.navButtonText}>Cek Nilai</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 25,
    width: "100%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#333", 
    textAlign: "center", 
    marginBottom: 25,
  },
  inputContainer: { 
    marginBottom: 20,
  },
  label: { 
    fontSize: 16, 
    marginBottom: 8, 
    color: "#555", 
    fontWeight: "500" 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ddd", 
    borderRadius: 10, 
    padding: 15, 
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
    flex: 1,
    marginHorizontal: 5,
  },
  calculateButton: {
    backgroundColor: "#6a1b9a",
  },
  resetButton: {
    backgroundColor: "#ff6b6b",
  },
  buttonText: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  resultContainer: { 
    marginTop: 20, 
    padding: 20, 
    backgroundColor: "#e1bee7", 
    borderRadius: 10, 
    alignItems: "center" 
  },
  resultLabel: { 
    fontSize: 16, 
    color: "#4a148c", 
    marginBottom: 5 
  },
  result: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#4a148c" 
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  navButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  navButtonText: {
    color: '#6a1b9a',
    fontWeight: '500',
  },
});