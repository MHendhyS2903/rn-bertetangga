import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  path: string;
  size?: number;
  color?: string;
}

const Icon = ({ path, size = 20, color = '#000' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d={path} fill={color} />
  </Svg>
);

interface Announcement {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  author: string;
  role: string;
  type: 'announcement' | 'reminder' | 'urgent' | 'info';
  reactions: number;
  comments: number;
  isRead: boolean;
}

const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Gotong Royong Minggu Ini',
    content: 'Warga yang terhormat, kegiatan gotong royong akan dilaksanakan pada hari Minggu pukul 07.00 WIB. Lokasi di area taman RW. Mohon kehadiran semua warga. Bawa alat kebersihan masing-masing. Terima kasih atas partisipasinya.',
    timestamp: '2 jam yang lalu',
    author: 'Budi Santoso',
    role: 'Ketua RT 05',
    type: 'announcement',
    reactions: 24,
    comments: 8,
    isRead: false,
  },
  {
    id: '2',
    title: 'Reminder: Iuran Bulanan',
    content: 'Pengingat untuk pembayaran iuran bulanan bulan Maret. Bisa transfer ke rekening BCA 1234567890 a.n. Bendahara RT atau bayar langsung ke rumah Bu Sari di Jalan Melati No. 15.',
    timestamp: '5 jam yang lalu',
    author: 'Sari Wahyuni',
    role: 'Bendahara RT',
    type: 'reminder',
    reactions: 18,
    comments: 3,
    isRead: true,
  },
  {
    id: '3',
    title: '[URGENT] Perbaikan Pipa Air',
    content: 'Ada perbaikan pipa air utama besok pagi jam 08.00-12.00. Air akan mati sementara. Mohon siapkan persediaan air. Maaf atas ketidaknyamanannya.',
    timestamp: '1 hari yang lalu',
    author: 'Tim Maintenance',
    role: 'Pengelola',
    type: 'urgent',
    reactions: 45,
    comments: 12,
    isRead: true,
  },
];

const AnnouncementsTimeline = () => {
  const getTypeConfig = (type: string) => {
    switch (type) {
      case 'urgent':
        return { 
          color: '#DC3545', 
          bgColor: '#FFF5F5', 
          icon: 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z',
          label: 'URGENT'
        };
      case 'reminder':
        return { 
          color: '#FD7E14', 
          bgColor: '#FFF9F5', 
          icon: 'M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
          label: 'REMINDER'
        };
      case 'announcement':
        return { 
          color: '#28A745', 
          bgColor: '#F8FFF9', 
          icon: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z',
          label: 'PENGUMUMAN'
        };
      default:
        return { 
          color: '#007BFF', 
          bgColor: '#F8FCFF', 
          icon: 'M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
          label: 'INFO'
        };
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>🏘️ Feed Warga</Text>
          <Text style={styles.headerSubtitle}>Informasi terkini dari pengurus RT/RW</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Icon 
            path="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z"
            size={16}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
        {announcements.map((item, index) => {
          const config = getTypeConfig(item.type);
          return (
            <View key={item.id} style={styles.timelineItem}>
              {/* Timeline Line */}
              {index !== announcements.length - 1 && (
                <View style={styles.timelineLine} />
              )}
              
              {/* Timeline Dot */}
              <View style={[styles.timelineDot, { backgroundColor: config.color }]}>
                <Icon path={config.icon} size={12} color="#FFF" />
              </View>

              {/* Content Card */}
              <TouchableOpacity 
                style={[
                  styles.card, 
                  { backgroundColor: config.bgColor },
                  !item.isRead && styles.unreadCard
                ]} 
                activeOpacity={0.9}
              >
                {/* Unread Indicator */}
                {!item.isRead && <View style={styles.unreadIndicator} />}

                {/* Card Header */}
                <View style={styles.cardHeader}>
                  <View style={styles.authorSection}>
                    <View style={[styles.avatar, { backgroundColor: config.color }]}>
                      <Text style={styles.avatarText}>
                        {item.author.split(' ').map(n => n[0]).join('')}
                      </Text>
                    </View>
                    <View style={styles.authorInfo}>
                      <Text style={styles.authorName}>{item.author}</Text>
                      <Text style={styles.authorRole}>{item.role}</Text>
                    </View>
                  </View>
                  <View style={styles.metaInfo}>
                    <View style={[styles.typeBadge, { backgroundColor: config.color }]}>
                      <Text style={styles.typeText}>{config.label}</Text>
                    </View>
                    <Text style={styles.timestamp}>{item.timestamp}</Text>
                  </View>
                </View>

                {/* Card Content */}
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardText} numberOfLines={3}>
                    {item.content}
                  </Text>
                  
                  <TouchableOpacity style={styles.readMoreButton}>
                    <Text style={[styles.readMoreText, { color: config.color }]}>
                      Baca selengkapnya
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Card Footer */}
                <View style={styles.cardFooter}>
                  <View style={styles.engagementStats}>
                    <TouchableOpacity style={styles.statItem}>
                      <Icon 
                        path="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                        size={16} 
                        color="#ADB5BD" 
                      />
                      <Text style={styles.statText}>{item.reactions}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.statItem}>
                      <Icon 
                        path="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9Z"
                        size={16} 
                        color="#ADB5BD" 
                      />
                      <Text style={styles.statText}>{item.comments}</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={[styles.shareButton, { borderColor: config.color }]}>
                    <Icon 
                      path="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"
                      size={14} 
                      color={config.color} 
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* Load More Button */}
      <TouchableOpacity style={styles.loadMoreButton}>
        <Text style={styles.loadMoreText}>Muat Pengumuman Lainnya</Text>
        <Icon 
          path="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          size={16} 
          color="#6C757D" 
        />
      </TouchableOpacity>
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
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6C757D',
    fontWeight: '500',
  },
  filterButton: {
    padding: 12,
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 24,
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    left: 16,
    top: 32,
    bottom: -24,
    width: 2,
    backgroundColor: '#E9ECEF',
    zIndex: 0,
  },
  timelineDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    marginTop: 12,
    zIndex: 1,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  card: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    position: 'relative',
  },
  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#007BFF',
  },
  unreadIndicator: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007BFF',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 2,
  },
  authorRole: {
    fontSize: 12,
    color: '#6C757D',
    fontWeight: '500',
  },
  metaInfo: {
    alignItems: 'flex-end',
  },
  typeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 4,
  },
  typeText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  timestamp: {
    fontSize: 11,
    color: '#ADB5BD',
    fontWeight: '500',
  },
  cardContent: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 12,
    lineHeight: 24,
  },
  cardText: {
    fontSize: 15,
    color: '#495057',
    lineHeight: 22,
    marginBottom: 12,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
  },
  readMoreText: {
    fontSize: 13,
    fontWeight: '600',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.08)',
  },
  engagementStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  statText: {
    fontSize: 12,
    color: '#6C757D',
    marginLeft: 6,
    fontWeight: '600',
  },
  shareButton: {
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#FFF',
  },
  loadMoreButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 16,
    marginHorizontal: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  loadMoreText: {
    fontSize: 14,
    color: '#6C757D',
    fontWeight: '600',
    marginRight: 8,
  },
});

export default AnnouncementsTimeline; 