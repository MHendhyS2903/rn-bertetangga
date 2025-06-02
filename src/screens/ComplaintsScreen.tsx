import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, FAB, Portal, Dialog, TextInput, Chip } from 'react-native-paper';

const ComplaintsScreen = () => {
  const [visible, setVisible] = useState(false);
  const [complaint, setComplaint] = useState({
    title: '',
    description: '',
    category: '',
  });

  const complaints = [
    {
      id: '1',
      title: 'Kebocoran Pipa Air',
      description: 'Ada kebocoran pipa air di depan rumah nomor 15',
      category: 'Infrastruktur',
      status: 'pending',
      date: '2024-06-01',
    },
    {
      id: '2',
      title: 'Sampah Menumpuk',
      description: 'Sampah belum diangkut selama 3 hari',
      category: 'Kebersihan',
      status: 'in_progress',
      date: '2024-06-02',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#FFA000';
      case 'in_progress':
        return '#2196F3';
      case 'resolved':
        return '#4CAF50';
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

  return (
    <View style={styles.container}>
      <ScrollView>
        {complaints.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Content>
              <View style={styles.cardHeader}>
                <Title>{item.title}</Title>
                <Chip
                  mode="outlined"
                  style={[styles.statusChip, { borderColor: getStatusColor(item.status) }]}
                  textStyle={{ color: getStatusColor(item.status) }}
                >
                  {getStatusText(item.status)}
                </Chip>
              </View>
              <Paragraph style={styles.category}>{item.category}</Paragraph>
              <Paragraph style={styles.description}>{item.description}</Paragraph>
              <Paragraph style={styles.date}>{item.date}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => {}}>Lihat Detail</Button>
              <Button onPress={() => {}}>Update Status</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>

      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Buat Pengaduan Baru</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Judul"
              value={complaint.title}
              onChangeText={(text) => setComplaint({ ...complaint, title: text })}
              style={styles.input}
            />
            <TextInput
              label="Kategori"
              value={complaint.category}
              onChangeText={(text) => setComplaint({ ...complaint, category: text })}
              style={styles.input}
            />
            <TextInput
              label="Deskripsi"
              value={complaint.description}
              onChangeText={(text) => setComplaint({ ...complaint, description: text })}
              multiline
              numberOfLines={4}
              style={styles.input}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Batal</Button>
            <Button onPress={() => {
              // Handle adding new complaint
              setVisible(false);
            }}>Kirim</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => setVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  card: {
    margin: 16,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  category: {
    color: '#757575',
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
  },
  date: {
    color: '#757575',
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
  },
});

export default ComplaintsScreen; 