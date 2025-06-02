import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Text } from 'react-native-paper';
import Svg, { Path } from 'react-native-svg';

const Header = () => {
  return (
    <View style={styles.headerSection}>
      <View style={styles.backgroundDesign}>
        <Svg height="100%" width="100%" style={styles.backgroundSvg}>
          {/* Decorative waves */}
          <Path
            d="M0,60 C50,40 100,80 150,60 C200,40 250,80 300,60 C350,40 400,80 450,60 L450,200 L0,200 Z"
            fill="#FFE99A"
            opacity="0.3"
          />
        </Svg>
      </View>
      <View style={styles.headerContent}>
        <View style={styles.welcomeText}>
          <Text style={styles.greeting}>Selamat Datang</Text>
          <Title style={styles.welcomeTitle}>RT/RW Digital</Title>
          <Text style={styles.location}>RT 01 / RW 05, Kelurahan Contoh</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    backgroundColor: '#BE5B50',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backgroundDesign: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundSvg: {
    position: 'absolute',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'relative',
    zIndex: 1,
  },
  welcomeText: {
    flex: 1,
  },
  greeting: {
    color: '#FFFBDE',
    fontSize: 16,
    marginBottom: 4,
    opacity: 0.9,
  },
  welcomeTitle: {
    color: '#FFFBDE',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  location: {
    color: '#FFFBDE',
    fontSize: 14,
    opacity: 0.8,
  },
});

export default Header; 