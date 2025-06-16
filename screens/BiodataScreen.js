import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function BiodataScreen() {
  const socialMedia = [
    { name: 'WhatsApp', icon: 'logo-whatsapp', url: 'https://wa.me/6282331101317', color: '#25D366' },
    { name: 'Instagram', icon: 'logo-instagram', url: 'https://instagram.com/ainairaii', color: '#E1306C' },
    { name: 'Email', icon: 'mail', url: 'mailto:painaaanggraini@gmail.com', color: '#D44638' }
  ];

  const skills = [
    { name: 'UI Design', icon: 'palette' },
    { name: 'Coding', icon: 'code' },
    { name: 'Photography', icon: 'camera' }
  ];

  const openMaps = () => {
    const url = `https://maps.app.goo.gl/fZx9Chkxht2JLF6VA?g_st=aw`;
    Linking.openURL(url);
  };

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image 
            style={styles.profileImage} 
            source={require('../assets/gambar/image.png')}
          />
          <Text style={styles.profileName}>Paina Anggraini</Text>
          <Text style={styles.profileTitle}>X RPL 1 | Absen 30</Text>
          <Text style={styles.profileBio}>
            "Kenalin, saya Aini. Suka hal simpel, membaca novel, dan Photography. Nice to meet you."
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <View style={styles.aboutItem}>
          <Ionicons name="calendar" size={20} color="#7E57C2" />
          <View style={styles.aboutTextContainer}>
            <Text style={styles.aboutLabel}>Tanggal Lahir</Text>
            <Text style={styles.aboutValue}>15 April 2008</Text>
          </View>
        </View>
        <View style={styles.aboutItem}>
          <Ionicons name="home" size={20} color="#7E57C2" />
          <View style={styles.aboutTextContainer}>
            <Text style={styles.aboutLabel}>Alamat</Text>
            <TouchableOpacity onPress={openMaps}>
              <View style={styles.addressContainer}>
                <Text style={[styles.aboutValue, styles.linkText]}>Bengkel Hanis, Dusun Landaur</Text>
                <Text style={[styles.aboutValue, styles.linkText]}>Pajarakan, Probolinggo</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.aboutItem}>
          <Ionicons name="heart" size={20} color="#7E57C2" />
          <View style={styles.aboutTextContainer}>
            <Text style={styles.aboutLabel}>Hobi</Text>
            <Text style={styles.aboutValue}>
              Coding, Fotografi, Nonton Drakor, Membaca Novel
            </Text>
          </View>
        </View>
        <View style={styles.aboutItem}>
          <MaterialIcons name="format-quote" size={20} color="#7E57C2" />
          <View style={styles.aboutTextContainer}>
            <Text style={styles.aboutLabel}>Moto Hidup</Text>
            <Text style={styles.aboutValue}>
              "Lakukan yang terbaik, selebihnya biar semesta yang atur."
            </Text>
          </View>
        </View>
        {/* Tambahan bagian Cita-Cita */}
        <View style={styles.aboutItem}>
          <MaterialIcons name="stars" size={20} color="#7E57C2" />
          <View style={styles.aboutTextContainer}>
            <Text style={styles.aboutLabel}>Cita-Cita</Text>
            <Text style={styles.aboutValue}>
              "Menjadi seorang Designer Baju"
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <Text style={styles.timelineYear}>2024 - Now</Text>
            <Text style={styles.timelineTitle}>SMKN 1 Kraksaan</Text>
            <Text style={styles.timelineDesc}>Jurusan Rekayasa Perangkat Lunak</Text>
          </View>
        </View>
        <View style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <Text style={styles.timelineYear}>2020 - 2023</Text>
            <Text style={styles.timelineTitle}>SMPN 2 Pajarakan</Text>
          </View>
        </View>
        <View style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <Text style={styles.timelineYear}>2014 - 2020</Text>
            <Text style={styles.timelineTitle}>SDN Karangpranti 2</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Skills</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillItem}>
              <Ionicons name={skill.icon} size={24} color="#7E57C2" />
              <Text style={styles.skillText}>{skill.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get in Touch</Text>
        <View style={styles.socialButtons}>
          {socialMedia.map((social, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.socialButton, { backgroundColor: social.color }]}
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
    backgroundColor: '#f8f9fa',
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#7E57C2',
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    paddingTop: 50,
  },
  profileContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  profileTitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 10,
  },
  profileBio: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 10,
    paddingHorizontal: 30,
    lineHeight: 20,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#7E57C2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7E57C2',
    marginBottom: 15,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  aboutItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  aboutTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  aboutLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
  },
  aboutValue: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    lineHeight: 22,
  },
  addressContainer: {
    flexDirection: 'column',
  },
  linkText: {
    color: '#7E57C2',
    textDecorationLine: 'underline',
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#7E57C2',
    marginRight: 15,
    marginTop: 3,
  },
  timelineContent: {
    flex: 1,
  },
  timelineYear: {
    fontSize: 12,
    color: '#7E57C2',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  timelineTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  timelineDesc: {
    fontSize: 13,
    color: '#666',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  skillItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  skillText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#444',
    fontWeight: '500',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  socialButton: {
    width: '48%',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: '600',
  },
});