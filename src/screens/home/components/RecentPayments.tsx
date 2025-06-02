import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { mdiCash } from '@mdi/js';
import Icon from './Icon';

const RecentPayments = () => {
  const payments = [
    {
      id: '1',
      title: 'Iuran Bulanan',
      amount: 'Rp 50.000',
      date: '15 Maret 2024',
      status: 'Lunas',
    },
    {
      id: '2',
      title: 'Iuran Keamanan',
      amount: 'Rp 30.000',
      date: '1 Maret 2024',
      status: 'Lunas',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon path={mdiCash} color="#FBDB93" />
        <Title style={styles.title}>Pembayaran Terbaru</Title>
      </View>
      {payments.map((payment) => (
        <Card key={payment.id} style={styles.card}>
          <Card.Content>
            <View style={styles.paymentHeader}>
              <Title style={{ color: '#333' }}>{payment.title}</Title>
              <Paragraph style={styles.amount}>{payment.amount}</Paragraph>
            </View>
            <View style={styles.paymentDetails}>
              <Paragraph style={{ color: '#666' }}>{payment.date}</Paragraph>
              <Paragraph style={styles.status}>{payment.status}</Paragraph>
            </View>
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
  paymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  paymentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  status: {
    color: '#388E3C',
    fontWeight: 'bold',
  },
});

export default RecentPayments; 