import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Surface } from 'react-native-paper';

interface BalanceCardProps {
  balance: number;
}

const BalanceCard = ({ balance }: BalanceCardProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Surface style={styles.container} elevation={0}>
      <View style={styles.content}>
        <Text style={styles.balance}>{formatCurrency(balance)}</Text>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 6,
  },
  content: {
    padding: 12,
    alignItems: 'center',
  },
  balance: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F4631E',
  },
});

export default BalanceCard;