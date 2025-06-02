import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, DataTable, FAB, Portal, Dialog, TextInput } from 'react-native-paper';
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

const FinanceScreen = () => {
  const [visible, setVisible] = useState(false);
  const [transaction, setTransaction] = useState({
    type: 'income',
    amount: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
  });

  const transactions = [
    {
      id: '1',
      type: 'income',
      amount: 1500000,
      description: 'Iuran Bulanan Juni 2024',
      date: '2024-06-01',
    },
    {
      id: '2',
      type: 'expense',
      amount: 500000,
      description: 'Pembelian Alat Kebersihan',
      date: '2024-06-02',
    },
  ];

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Summary Cards */}
        <View style={styles.summaryContainer}>
          <Card style={[styles.summaryCard, { backgroundColor: '#4CAF50' }]}>
            <Card.Content>
              <Title style={styles.summaryTitle}>Pemasukan</Title>
              <Paragraph style={styles.summaryAmount}>
                Rp {totalIncome.toLocaleString()}
              </Paragraph>
            </Card.Content>
          </Card>

          <Card style={[styles.summaryCard, { backgroundColor: '#F44336' }]}>
            <Card.Content>
              <Title style={styles.summaryTitle}>Pengeluaran</Title>
              <Paragraph style={styles.summaryAmount}>
                Rp {totalExpense.toLocaleString()}
              </Paragraph>
            </Card.Content>
          </Card>

          <Card style={[styles.summaryCard, { backgroundColor: '#2196F3' }]}>
            <Card.Content>
              <Title style={styles.summaryTitle}>Saldo</Title>
              <Paragraph style={styles.summaryAmount}>
                Rp {balance.toLocaleString()}
              </Paragraph>
            </Card.Content>
          </Card>
        </View>

        {/* Transactions Table */}
        <Card style={styles.tableCard}>
          <Card.Content>
            <Title style={styles.tableTitle}>Riwayat Transaksi</Title>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Tanggal</DataTable.Title>
                <DataTable.Title>Deskripsi</DataTable.Title>
                <DataTable.Title numeric>Jumlah</DataTable.Title>
              </DataTable.Header>

              {transactions.map((transaction) => (
                <DataTable.Row key={transaction.id}>
                  <DataTable.Cell>{transaction.date}</DataTable.Cell>
                  <DataTable.Cell>{transaction.description}</DataTable.Cell>
                  <DataTable.Cell numeric>
                    <Paragraph
                      style={{
                        color: transaction.type === 'income' ? '#4CAF50' : '#F44336',
                      }}
                    >
                      {transaction.type === 'income' ? '+' : '-'} Rp{' '}
                      {transaction.amount.toLocaleString()}
                    </Paragraph>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </Card.Content>
        </Card>
      </ScrollView>

      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Tambah Transaksi</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Jumlah"
              value={transaction.amount}
              onChangeText={(text) => setTransaction({ ...transaction, amount: text })}
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInput
              label="Deskripsi"
              value={transaction.description}
              onChangeText={(text) => setTransaction({ ...transaction, description: text })}
              style={styles.input}
            />
            <TextInput
              label="Tanggal"
              value={transaction.date}
              onChangeText={(text) => setTransaction({ ...transaction, date: text })}
              style={styles.input}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Batal</Button>
            <Button onPress={() => {
              // Handle adding new transaction
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
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  summaryCard: {
    flex: 1,
    margin: 4,
    elevation: 2,
  },
  summaryTitle: {
    color: '#fff',
    fontSize: 16,
  },
  summaryAmount: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tableCard: {
    margin: 16,
    elevation: 2,
    backgroundColor: '#fff',
  },
  tableTitle: {
    marginBottom: 16,
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

export default FinanceScreen; 