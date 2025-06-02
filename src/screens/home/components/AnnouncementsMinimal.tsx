import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  isUrgent: boolean;
  category: string;
}

const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Gotong Royong Lingkungan',
    description: 'Kegiatan bersih-bersih lingkungan RW akan dilaksanakan hari ini',
    date: 'Hari ini',
    time: '07:00',
    isUrgent: true,
    category: 'Kegiatan',
  },
  {
    id: '2',
    title: 'Iuran Bulanan Maret',
    description: 'Pembayaran iuran bulan Maret sudah dapat dilakukan',
    date: 'Kemarin',
    time: '14:30',
    isUrgent: false,
    category: 'Keuangan',
  },
  {
    id: '3',
    title: 'Rapat Koordinasi RT',
    description: 'Undangan rapat koordinasi untuk pengurus RT',
    date: '18 Mar',
    time: '19:00',
    isUrgent: false,
    category: 'Rapat',
  },
  {
    id: '4',
    title: 'Program Vaksinasi',
    description: 'Pendaftaran vaksinasi COVID-19 gelombang ke-4',
    date: '17 Mar',
    time: '10:00',
    isUrgent: true,
    category: 'Kesehatan',
  },
];

const AnnouncementsMinimal = () => {
  const renderItem = ({ item }: { item: Announcement }) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.7}>
      <View style={styles.leftSection}>
        <View style={[styles.indicator, item.isUrgent && styles.urgentIndicator]} />
        <View style={styles.contentWrapper}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.time}>{item.time}</Text>
        {item.isUrgent && (
          <View style={styles.urgentBadge}>
            <Text style={styles.urgentText}>URGENT</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>📋 Pengumuman</Text>
          <Text style={styles.headerSubtitle}>Info terkini untuk warga</Text>
        </View>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={announcements}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  seeAllButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  seeAllText: {
    fontSize: 12,
    color: '#495057',
    fontWeight: '600',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 16,
  },
  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  indicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#DEE2E6',
    marginTop: 8,
    marginRight: 16,
  },
  urgentIndicator: {
    backgroundColor: '#DC3545',
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  contentWrapper: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
    flex: 1,
    marginRight: 8,
  },
  category: {
    fontSize: 11,
    color: '#6C757D',
    fontWeight: '500',
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  description: {
    fontSize: 14,
    color: '#6C757D',
    lineHeight: 20,
  },
  rightSection: {
    alignItems: 'flex-end',
    minWidth: 70,
    marginLeft: 12,
  },
  date: {
    fontSize: 12,
    color: '#ADB5BD',
    fontWeight: '500',
    marginBottom: 2,
  },
  time: {
    fontSize: 11,
    color: '#CED4DA',
    marginBottom: 8,
  },
  urgentBadge: {
    backgroundColor: '#DC3545',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  urgentText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  separator: {
    height: 1,
    backgroundColor: '#F1F3F4',
    marginLeft: 20,
  },
});

export default AnnouncementsMinimal; 