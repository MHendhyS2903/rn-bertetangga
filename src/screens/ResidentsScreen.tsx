import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Searchbar, Card, Title, Paragraph, FAB, Portal, Dialog, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Resident {
  id: string;
  name: string;
  address: string;
  phone: string;
  status: string;
}

const ResidentsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);
  const [newResident, setNewResident] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const residents = [
    {
      id: '1',
      name: 'John Doe',
      address: 'Jl. Contoh No. 1',
      phone: '081234567890',
      status: 'active',
    },
    {
      id: '2',
      name: 'Jane Smith',
      address: 'Jl. Contoh No. 2',
      phone: '081234567891',
      status: 'active',
    },
  ];

  const renderResidentCard = ({ item }: { item: Resident }) => (
    <Card style={styles.residentCard}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>Alamat: {item.address}</Paragraph>
        <Paragraph>Telepon: {item.phone}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button icon="pencil" onPress={() => {}}>Edit</Button>
        <Button icon="delete" onPress={() => {}}>Hapus</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Cari warga..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />

      <FlatList
        data={residents}
        renderItem={renderResidentCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Tambah Warga Baru</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Nama"
              value={newResident.name}
              onChangeText={(text) => setNewResident({ ...newResident, name: text })}
              style={styles.input}
            />
            <TextInput
              label="Alamat"
              value={newResident.address}
              onChangeText={(text) => setNewResident({ ...newResident, address: text })}
              style={styles.input}
            />
            <TextInput
              label="Telepon"
              value={newResident.phone}
              onChangeText={(text) => setNewResident({ ...newResident, phone: text })}
              style={styles.input}
              keyboardType="phone-pad"
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Batal</Button>
            <Button onPress={() => {
              // Handle adding new resident
              setVisible(false);
            }}>Simpan</Button>
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
  searchBar: {
    margin: 16,
    elevation: 4,
  },
  listContainer: {
    padding: 16,
  },
  residentCard: {
    marginBottom: 16,
    elevation: 2,
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

export default ResidentsScreen; 