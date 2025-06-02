import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { mdiAlertCircle } from '@mdi/js';
import Icon from './Icon';

const RecentComplaints = () => {
  const complaints = [
    {
      id: '1',
      title: 'Lampu Jalan Mati',
      description: 'Lampu jalan di depan rumah RT 01 mati',
      date: '15 Maret 2024',
      status: 'Dalam Proses',
    },
    {
      id: '2',
      title: 'Sampah Menumpuk',
      description: 'Sampah di TPS RT 01 sudah penuh',
      date: '14 Maret 2024',
      status: 'Selesai',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon path={mdiAlertCircle} color="#FBDB93" />
        <Title style={styles.title}>Pengaduan Terbaru</Title>
      </View>
      {complaints.map((complaint) => (
        <Card key={complaint.id} style={styles.card}>
          <Card.Content>
            <View style={styles.complaintHeader}>
              <Title style={{ color: '#333' }}>{complaint.title}</Title>
              <Paragraph style={styles.status}>{complaint.status}</Paragraph>
            </View>
            <Paragraph style={styles.description}>{complaint.description}</Paragraph>
            <Paragraph style={styles.date}>{complaint.date}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    marginLeft: 8,
    color: '#333',
  },
  card: {
    marginBottom: 16,
    elevation: 4,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 8,
  },
  complaintHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  description: {
    color: '#666',
    marginBottom: 8,
  },
  date: {
    color: '#666',
    fontSize: 12,
  },
  status: {
    color: '#F57C00',
    fontWeight: 'bold',
  },
});

export default RecentComplaints; 