import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = (SCREEN_WIDTH - 64) / 2; // 2 columns with better padding

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

interface Announcement {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  bgColor: string;
  date: string;
  isNew: boolean;
}

const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Gotong Royong',
    subtitle: 'Minggu 07:00 WIB',
    icon: 'M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z',
    color: '#28A745',
    bgColor: '#F8FFF9',
    date: '20 Mar',
    isNew: true,
  },
  {
    id: '2',
    title: 'Iuran Bulanan',
    subtitle: 'Pembayaran Maret',
    icon: 'M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z',
    color: '#FD7E14',
    bgColor: '#FFF9F5',
    date: '19 Mar',
    isNew: false,
  },
  {
    id: '3',
    title: 'Rapat RT',
    subtitle: 'Koordinasi Pengurus',
    icon: 'M16,4C16.88,4 17.67,4.84 17.67,5.84C17.67,6.82 16.88,7.68 16,7.68C15.12,7.68 14.33,6.82 14.33,5.84C14.33,4.84 15.12,4 16,4M16,10.33C18.76,10.33 21,11.54 21,13.07V15H11V13.07C11,11.54 13.24,10.33 16,10.33M8,4C8.88,4 9.67,4.84 9.67,5.84C9.67,6.82 8.88,7.68 8,7.68C7.12,7.68 6.33,6.82 6.33,5.84C6.33,4.84 7.12,4 8,4M8,10.33C10.76,10.33 13,11.54 13,13.07V15H3V13.07C3,11.54 5.24,10.33 8,10.33Z',
    color: '#007BFF',
    bgColor: '#F8FCFF',
    date: '18 Mar',
    isNew: false,
  },
  {
    id: '4',
    title: 'Vaksinasi',
    subtitle: 'Daftar Sekarang',
    icon: 'M11,2V8.5C11,9.33 11.67,10 12.5,10C13.33,10 14,9.33 14,8.5V6H16V8.5A2.5,2.5 0 0,1 13.5,11A2.5,2.5 0 0,1 11,8.5V3.83L9.41,5.41L8,4L12,0L16,4L14.59,5.41L13,3.83V6H16V8.5A2.5,2.5 0 0,1 13.5,11A2.5,2.5 0 0,1 11,8.5V2M5,13A1,1 0 0,1 6,14V20A1,1 0 0,1 5,21A1,1 0 0,1 4,20V14A1,1 0 0,1 5,13M9,13A1,1 0 0,1 10,14V20A1,1 0 0,1 9,21A1,1 0 0,1 8,20V14A1,1 0 0,1 9,13M19,13A1,1 0 0,1 20,14V20A1,1 0 0,1 19,21A1,1 0 0,1 18,20V14A1,1 0 0,1 19,13M15,13A1,1 0 0,1 16,14V20A1,1 0 0,1 15,21A1,1 0 0,1 14,20V14A1,1 0 0,1 15,13Z',
    color: '#DC3545',
    bgColor: '#FFF8F8',
    date: '17 Mar',
    isNew: true,
  },
];

const AnnouncementsGrid = () => {
  const renderItem = ({ item }: { item: Announcement }) => (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: item.bgColor }]} 
      activeOpacity={0.8}
    >
      {/* New Badge */}
      {item.isNew && (
        <View style={styles.newBadge}>
          <Text style={styles.newText}>BARU</Text>
        </View>
      )}

      {/* Card Header */}
      <View style={styles.cardHeader}>
        <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
          <Icon path={item.icon} size={22} color="#FFF" />
        </View>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      
      {/* Card Content */}
      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={[styles.subtitle, { color: item.color }]} numberOfLines={2}>
          {item.subtitle}
        </Text>
      </View>
      
      {/* Card Footer */}
      <View style={styles.cardFooter}>
        <View style={[styles.indicator, { backgroundColor: item.color }]} />
        <TouchableOpacity style={[styles.actionButton, { borderColor: item.color }]}>
          <Text style={[styles.actionText, { color: item.color }]}>Lihat</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>🏘️ Info Terbaru</Text>
          <Text style={styles.headerSubtitle}>Update kegiatan RT/RW</Text>
        </View>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>Semua</Text>
          <Icon 
            path="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            size={14}
            color="#666"
          />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={announcements}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6C757D',
    fontWeight: '500',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  viewAllText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
    marginRight: 4,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: ITEM_WIDTH,
    padding: 16,
    borderRadius: 20,
    marginBottom: 20,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  newBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FF4757',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    zIndex: 1,
  },
  newText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    fontSize: 11,
    color: '#ADB5BD',
    fontWeight: '600',
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardContent: {
    marginBottom: 20,
    minHeight: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 6,
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  indicator: {
    width: 32,
    height: 4,
    borderRadius: 2,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#FFF',
  },
  actionText: {
    fontSize: 11,
    fontWeight: '600',
  },
});

export default AnnouncementsGrid; 