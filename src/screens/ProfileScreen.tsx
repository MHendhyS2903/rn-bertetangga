import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.profileCard}>
        <Card.Content style={styles.profileContent}>
          <Avatar.Icon size={80} icon="account" style={styles.avatar} />
          <Title style={styles.name}>John Doe</Title>
          <Paragraph style={styles.role}>Ketua RT</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.infoCard}>
        <Card.Content>
          <List.Item
            title="Email"
            description="john.doe@example.com"
            left={props => <List.Icon {...props} icon="email" />}
          />
          <List.Item
            title="Telepon"
            description="081234567890"
            left={props => <List.Icon {...props} icon="phone" />}
          />
          <List.Item
            title="Alamat"
            description="Jl. Contoh No. 1, RT 01/RW 05"
            left={props => <List.Icon {...props} icon="map-marker" />}
          />
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        icon="logout"
        onPress={() => {}}
        style={styles.logoutButton}
      >
        Keluar
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  profileCard: {
    margin: 16,
    elevation: 4,
  },
  profileContent: {
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    backgroundColor: '#2196F3',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  role: {
    color: '#666',
    marginTop: 4,
  },
  infoCard: {
    margin: 16,
    marginTop: 0,
    elevation: 4,
  },
  logoutButton: {
    margin: 16,
    marginTop: 0,
  },
});

export default ProfileScreen; 