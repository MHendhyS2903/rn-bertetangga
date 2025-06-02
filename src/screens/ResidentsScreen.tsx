import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Searchbar, Card, Title, Paragraph, FAB, Portal, Dialog, Button, TextInput } from 'react-native-paper';
import { mdiPencil, mdiDelete, mdiPlus } from '@mdi/js';
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

const ResidentsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);
  const [residents] = useState([
    {
      id: '1',
      name: 'John Doe',
      address: 'RT 01 / RW 05, No. 123',
      phone: '081234567890',
    },
    {
      id: '2',
      name: 'Jane Smith',
      address: 'RT 01 / RW 05, No. 124',
      phone: '081234567891',
    },
  ]);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const renderItem = ({ item }: { item: any }) => (
    <Card style={styles.residentCard}>
      <Card.Content>
        <Title style={{ color: '#333' }}>{item.name}</Title>
        <Paragraph style={{ color: '#666' }}>{item.address}</Paragraph>
        <Paragraph style={{ color: '#666' }}>{item.phone}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button icon={() => <Icon path={mdiPencil} color="#2196F3" />} textColor="#2196F3">
          Edit
        </Button>
        <Button icon={() => <Icon path={mdiDelete} color="#F44336" />} textColor="#F44336">
          Hapus
        </Button>
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
        iconColor="#2196F3"
        inputStyle={{ color: '#333' }}
        placeholderTextColor="#666"
      />

      <FlatList
        data={residents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <FAB
        icon={() => <Icon path={mdiPlus} color="#FFFFFF" />}
        style={styles.fab}
        onPress={showDialog}
      />

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Tambah Warga</Dialog.Title>
          <Dialog.Content>
            <TextInput
              mode="outlined"
              label="Nama"
              style={styles.input}
              outlineColor="#E0E0E0"
              activeOutlineColor="#2196F3"
            />
            <TextInput
              mode="outlined"
              label="Alamat"
              style={styles.input}
              outlineColor="#E0E0E0"
              activeOutlineColor="#2196F3"
            />
            <TextInput
              mode="outlined"
              label="Nomor Telepon"
              style={styles.input}
              outlineColor="#E0E0E0"
              activeOutlineColor="#2196F3"
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog} textColor="#2196F3">Batal</Button>
            <Button onPress={hideDialog} textColor="#2196F3">Simpan</Button>
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
  searchBar: {
    margin: 16,
    elevation: 2,
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  residentCard: {
    marginBottom: 16,
    elevation: 2,
    backgroundColor: '#fff',
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

export default ResidentsScreen; 