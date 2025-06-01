import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BiodataScreen() {
  const socialMedia = [
    { name: 'WhatsApp', icon: 'logo-whatsapp', url: 'https://wa.me/6282331101317' },
    { name: 'Instagram', icon: 'logo-instagram', url: 'https://instagram.com/ainairaii' },
    { name: 'Email', icon: 'mail', url: 'mailto:painaaanggraini@gmail.com' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          style={styles.profileImage} 
          source={require('../assets/gambar/image.png')}
        />
        <Text style={styles.profileName}>Paina Anggraini</Text>
        <Text style={styles.profileTitle}>Kelas X RPL 1 - Absen (30)</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informasi Diri</Text>
        <View style={styles.infoItem}>
          <Ionicons name="person" size={18} color="#6a1b9a" />
          <Text style={styles.infoText}>Nama lengkap: Paina Anggraini</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="pricetag" size={18} color="#6a1b9a" />
          <Text style={styles.infoText}>Nama Panggilan: Aini</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="school" size={18} color="#6a1b9a" />
          <Text style={styles.infoText}>Siswa SMK Jurusan RPL</Text>
        </View>
      </View>

      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Hubungi Saya</Text>
        <View style={styles.socialButtons}>
          {socialMedia.map((social, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.socialButton}
              onPress={() => Linking.openURL(social.url)}
            >
              <Ionicons name={social.icon} size={24} color="white" />
              <Text style={styles.socialButtonText}>{social.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#6a1b9a',
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6a1b9a',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
  socialContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6a1b9a',
    marginBottom: 15,
    textAlign: 'center',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  socialButton: {
    backgroundColor: '#6a1b9a',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 120,
    justifyContent: 'center',
  },
  socialButtonText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: '500',
  },
});