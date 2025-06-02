import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, FAB, Portal, Dialog, TextInput } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import { mdiPlus } from '@mdi/js';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  path: string;
  size?: number;
  color?: string;
}

const Icon = ({ path, size = 24, color = '#000' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d={path} fill={color} />
  </Svg>
);

const EventsCalendarScreen = () => {
  const [visible, setVisible] = useState(false);
  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
  });

  const events = [
    {
      id: '1',
      title: 'Rapat RT',
      description: 'Rapat bulanan RT membahas program kerja',
      date: '2024-06-15',
      time: '19:00',
      location: 'Rumah Ketua RT',
    },
    {
      id: '2',
      title: 'Kerja Bakti',
      description: 'Bersih-bersih lingkungan RT',
      date: '2024-06-20',
      time: '07:00',
      location: 'Lapangan RT',
    },
  ];

  const markedDates = events.reduce((acc, event) => {
    acc[event.date] = { marked: true, dotColor: '#2196F3' };
    return acc;
  }, {} as { [key: string]: { marked: boolean; dotColor: string } });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.calendarCard}>
          <Card.Content>
            <Calendar
              markedDates={markedDates}
              theme={{
                todayTextColor: '#2196F3',
                selectedDayBackgroundColor: '#2196F3',
                dotColor: '#2196F3',
                arrowColor: '#2196F3',
              }}
            />
          </Card.Content>
        </Card>

        <Title style={styles.eventsTitle}>Daftar Acara</Title>
        {events.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph style={styles.dateTime}>
                {item.date} • {item.time}
              </Paragraph>
              <Paragraph style={styles.location}>{item.location}</Paragraph>
              <Paragraph style={styles.description}>{item.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => {}}>Lihat Detail</Button>
              <Button onPress={() => {}}>Edit</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>

      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Tambah Acara Baru</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Judul"
              value={event.title}
              onChangeText={(text) => setEvent({ ...event, title: text })}
              style={styles.input}
            />
            <TextInput
              label="Tanggal"
              value={event.date}
              onChangeText={(text) => setEvent({ ...event, date: text })}
              style={styles.input}
            />
            <TextInput
              label="Waktu"
              value={event.time}
              onChangeText={(text) => setEvent({ ...event, time: text })}
              style={styles.input}
            />
            <TextInput
              label="Lokasi"
              value={event.location}
              onChangeText={(text) => setEvent({ ...event, location: text })}
              style={styles.input}
            />
            <TextInput
              label="Deskripsi"
              value={event.description}
              onChangeText={(text) => setEvent({ ...event, description: text })}
              multiline
              numberOfLines={4}
              style={styles.input}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Batal</Button>
            <Button onPress={() => {
              // Handle adding new event
              setVisible(false);
            }}>Simpan</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <FAB
        style={styles.fab}
        icon={() => <Icon path={mdiPlus} size={24} color="#fff" />}
        onPress={() => setVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  calendarCard: {
    margin: 16,
    elevation: 2,
    backgroundColor: '#fff',
  },
  eventsTitle: {
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    color: '#333',
  },
  card: {
    margin: 16,
    marginTop: 0,
    elevation: 2,
    backgroundColor: '#fff',
  },
  dateTime: {
    color: '#666',
    marginBottom: 4,
  },
  location: {
    color: '#2196F3',
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
    color: '#333',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#2196F3',
  },
  input: {
    marginBottom: 12,
    backgroundColor: '#fff',
  },
});

export default EventsCalendarScreen; 