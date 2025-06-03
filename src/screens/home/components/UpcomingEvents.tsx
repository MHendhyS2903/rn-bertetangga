import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Modal, TouchableOpacity, Image } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.6;

const events = [
  {
    id: 1,
    title: 'Gotong Royong',
    date: '15 Maret 2024',
    image: 'https://picsum.photos/seed/gotong1/800/600',
  },
  {
    id: 2,
    title: 'Musyawarah RT',
    date: '20 Maret 2024',
    image: 'https://picsum.photos/seed/musyawarah1/800/600',
  },
  {
    id: 3,
    title: 'Kegiatan Posyandu',
    date: '25 Maret 2024',
    image: 'https://picsum.photos/seed/posyandu1/800/600',
  },
  {
    id: 4,
    title: 'Pembersihan Lingkungan',
    date: '28 Maret 2024',
    image: 'https://picsum.photos/seed/bersih1/800/600',
  },
  {
    id: 5,
    title: 'Kegiatan Sosial',
    date: '30 Maret 2024',
    image: 'https://picsum.photos/seed/sosial1/800/600',
  },
];

const UpcomingEvents = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handlePress = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.scrollView}
        snapToInterval={CARD_WIDTH + 16}
        decelerationRate="fast"
        snapToAlignment="center"
      >
        {events.map((event) => (
          <TouchableOpacity
            key={event.id}
            onPress={() => handlePress(event.image)}
            activeOpacity={0.7}
          >
            <Card style={styles.card}>
              <View style={styles.imageContainer}>
                <Card.Cover source={{ uri: event.image }} style={styles.cardImage} />
                <View style={styles.overlay} />
                <View style={styles.textContainer}>
                  <Text style={styles.title} numberOfLines={1}>{event.title}</Text>
                  <Text style={styles.date}>{event.date}</Text>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        visible={!!selectedImage}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <TouchableOpacity 
          style={styles.modalContainer} 
          activeOpacity={1} 
          onPress={handleCloseModal}
        >
          <View style={styles.modalContent}>
            {selectedImage && (
              <Image
                source={{ uri: selectedImage }}
                style={styles.fullScreenImage}
                resizeMode="contain"
              />
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A237E',
  },
  scrollView: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  card: {
    width: CARD_WIDTH,
    marginRight: 16,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  cardImage: {
    height: 150,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '40%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  date: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: width,
    height: height,
  },
});

export default UpcomingEvents; 