import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { mdiCalendar } from '@mdi/js';
import Icon from './Icon';

const events = [
  {
    id: 1,
    title: 'Gotong Royong',
    date: '15 Maret 2024',
    time: '07:00 WIB',
    location: 'Lapangan RT 01',
  },
  {
    id: 2,
    title: 'Musyawarah RT',
    date: '20 Maret 2024',
    time: '19:00 WIB',
    location: 'Balai RT 01',
  },
];

const UpcomingEvents = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Kegiatan Mendatang</Text>
        <Button mode="text" onPress={() => {}}>
          Lihat Semua
        </Button>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {events.map((event) => (
          <Card key={event.id} style={styles.card}>
            <Card.Content>
              <View style={styles.iconContainer}>
                <Icon path={mdiCalendar} size={24} color="#2196F3" />
              </View>
              <Text style={styles.title}>{event.title}</Text>
              <View style={styles.details}>
                <Text style={styles.date}>{event.date}</Text>
                <Text style={styles.time}>{event.time}</Text>
                <Text style={styles.location}>{event.location}</Text>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A237E',
  },
  scrollView: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  card: {
    width: 300,
    marginRight: 16,
    borderRadius: 16,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A237E',
    marginBottom: 8,
  },
  details: {
    gap: 4,
  },
  date: {
    fontSize: 14,
    color: '#333',
  },
  time: {
    fontSize: 14,
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#333',
  },
});

export default UpcomingEvents; 