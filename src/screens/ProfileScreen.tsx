import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar, List } from 'react-native-paper';
import { mdiAccount, mdiEmail, mdiPhone, mdiMapMarker, mdiLogout } from '@mdi/js';
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

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.profileCard}>
        <Card.Content style={styles.profileContent}>
          <Avatar.Icon size={80} icon={() => <Icon path={mdiAccount} size={40} color="#fff" />} style={styles.avatar} />
          <Title style={styles.name}>John Doe</Title>
          <Paragraph style={styles.role}>Ketua RT</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.infoCard}>
        <Card.Content>
          <List.Item
            title="Email"
            description="john.doe@example.com"
            left={props => <Icon path={mdiEmail} size={24} color={props.color} />}
          />
          <List.Item
            title="Telepon"
            description="081234567890"
            left={props => <Icon path={mdiPhone} size={24} color={props.color} />}
          />
          <List.Item
            title="Alamat"
            description="Jl. Contoh No. 1, RT 01/RW 05"
            left={props => <Icon path={mdiMapMarker} size={24} color={props.color} />}
          />
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        icon={() => <Icon path={mdiLogout} size={24} color="#fff" />}
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
    backgroundColor: '#fff',
  },
  profileCard: {
    margin: 16,
    elevation: 2,
    backgroundColor: '#fff',
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
    color: '#333',
  },
  role: {
    color: '#666',
    marginTop: 4,
  },
  infoCard: {
    margin: 16,
    marginTop: 0,
    elevation: 2,
    backgroundColor: '#fff',
  },
  logoutButton: {
    margin: 16,
    marginTop: 0,
    backgroundColor: '#F44336',
  },
});

export default ProfileScreen; 