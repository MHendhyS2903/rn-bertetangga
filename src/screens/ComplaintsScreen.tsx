import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, FAB, Portal, Dialog, TextInput, Chip } from 'react-native-paper';
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

const ComplaintsScreen = () => {
  const [visible, setVisible] = useState(false);
  const [complaints] = useState([
    {
      id: '1',
      title: 'Lampu Jalan Mati',
      description: 'Lampu jalan di depan rumah saya mati sejak 2 hari yang lalu.',
      category: 'Infrastruktur',
      status: 'pending',
      date: '2024-03-15',
    },
    {
      id: '2',
      title: 'Sampah Menumpuk',
      description: 'Sampah di depan kompleks belum diangkut selama 3 hari.',
      category: 'Kebersihan',
      status: 'in_progress',
      date: '2024-03-14',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#FFA000';
      case 'in_progress':
        return '#1976D2';
      case 'resolved':
        return '#388E3C';
      default:
        return '#757575';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Menunggu';
      case 'in_progress':
        return 'Diproses';
      case 'resolved':
        return 'Selesai';
      default:
        return status;
    }
  };

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        {complaints.map((complaint) => (
          <Card key={complaint.id} style={styles.card}>
            <Card.Content>
              <View style={styles.cardHeader}>
                <Title style={{ color: '#333' }}>{complaint.title}</Title>
                <Chip
                  style={[styles.statusChip, { backgroundColor: getStatusColor(complaint.status) }]}
                  textStyle={{ color: '#FFFFFF' }}
                >
                  {getStatusText(complaint.status)}
                </Chip>
              </View>
              <Paragraph style={styles.category}>{complaint.category}</Paragraph>
              <Paragraph style={[styles.description, { color: '#666' }]}>{complaint.description}</Paragraph>
              <Paragraph style={styles.date}>{complaint.date}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <FAB
        icon={() => <Icon path={mdiPlus} color="#FFFFFF" />}
        style={styles.fab}
        onPress={showDialog}
      />

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Buat Pengaduan</Dialog.Title>
          <Dialog.Content>
            <TextInput
              mode="outlined"
              label="Judul"
              style={styles.input}
              outlineColor="#E0E0E0"
              activeOutlineColor="#2196F3"
            />
            <TextInput
              mode="outlined"
              label="Kategori"
              style={styles.input}
              outlineColor="#E0E0E0"
              activeOutlineColor="#2196F3"
            />
            <TextInput
              mode="outlined"
              label="Deskripsi"
              multiline
              numberOfLines={4}
              style={styles.input}
              outlineColor="#E0E0E0"
              activeOutlineColor="#2196F3"
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog} textColor="#2196F3">Batal</Button>
            <Button onPress={hideDialog} textColor="#2196F3">Kirim</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    margin: 16,
    elevation: 2,
    backgroundColor: '#fff',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  category: {
    color: '#666',
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
  },
  date: {
    color: '#666',
    fontSize: 12,
  },
  statusChip: {
    height: 24,
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

export default ComplaintsScreen; 