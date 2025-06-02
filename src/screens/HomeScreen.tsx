import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, useTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const theme = useTheme();

  const announcements = [
    {
      id: 1,
      title: 'Pembayaran Iuran Bulanan',
      description: 'Pembayaran iuran bulanan dapat dilakukan melalui transfer bank atau langsung ke pengurus RT.',
      date: '2 Juni 2024',
    },
    {
      id: 2,
      title: 'Kegiatan Gotong Royong',
      description: 'Akan diadakan gotong royong membersihkan lingkungan pada hari Minggu, 9 Juni 2024.',
      date: '1 Juni 2024',
    },
  ];

  const quickActions = [
    { id: 1, title: 'Bayar Iuran', icon: 'cash-multiple', color: '#4CAF50' },
    { id: 2, title: 'Lapor Masalah', icon: 'message-alert', color: '#FFC107' },
    { id: 3, title: 'Kegiatan', icon: 'calendar', color: '#2196F3' },
    { id: 4, title: 'Pengumuman', icon: 'bullhorn', color: '#9C27B0' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Welcome Section */}
      <Card style={styles.welcomeCard}>
        <Card.Content>
          <Title style={styles.welcomeTitle}>Selamat Datang di RT/RW Digital</Title>
          <Paragraph>RT 01 / RW 05, Kelurahan Contoh</Paragraph>
        </Card.Content>
      </Card>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <Text style={styles.sectionTitle}>Aksi Cepat</Text>
        <View style={styles.quickActionsGrid}>
          {quickActions.map((action) => (
            <Card
              key={action.id}
              style={[styles.quickActionCard, { backgroundColor: action.color }]}
              onPress={() => {}}
            >
              <Card.Content style={styles.quickActionContent}>
                <Icon name={action.icon} size={32} color="#fff" />
                <Text style={styles.quickActionText}>{action.title}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </View>

      {/* Announcements */}
      <View style={styles.announcementsContainer}>
        <Text style={styles.sectionTitle}>Pengumuman Terbaru</Text>
        {announcements.map((announcement) => (
          <Card key={announcement.id} style={styles.announcementCard}>
            <Card.Content>
              <Title>{announcement.title}</Title>
              <Paragraph>{announcement.description}</Paragraph>
              <Text style={styles.dateText}>{announcement.date}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  welcomeCard: {
    margin: 16,
    elevation: 4,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  quickActionsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionCard: {
    width: '48%',
    marginBottom: 16,
  },
  quickActionContent: {
    alignItems: 'center',
    padding: 16,
  },
  quickActionText: {
    color: '#fff',
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  announcementsContainer: {
    padding: 16,
  },
  announcementCard: {
    marginBottom: 16,
    elevation: 2,
  },
  dateText: {
    marginTop: 8,
    color: '#757575',
    fontSize: 12,
  },
});

export default HomeScreen; 