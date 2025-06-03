import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header, QuickActions, UpcomingEvents, RecentPayments, BalanceCard } from './components';
import AnnouncementsMinimal from './components/AnnouncementsMinimal';

const HomeScreen = () => {
  // Mock data - nantinya bisa diganti dengan data dari API
  const rtBalance = 15000000;

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* <BalanceCard balance={rtBalance} /> */}
        <QuickActions />
        <UpcomingEvents />
        <AnnouncementsMinimal />
        <RecentPayments />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 120, // Menyesuaikan dengan tinggi header
    paddingBottom: 90, // Space for curved tab bar
  },
});

export default HomeScreen; 