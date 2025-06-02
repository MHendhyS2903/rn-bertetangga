import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.88;
const CARD_MARGIN = 12;

interface Announcement {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  readTime: string;
}

const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Gotong Royong Minggu Ini',
    description: 'Kegiatan gotong royong dilaksanakan Minggu, 24 Maret 2024 pukul 07.00 WIB di area taman RW. Mohon kehadiran semua warga dengan membawa alat kebersihan masing-masing.',
    imageUrl: 'https://picsum.photos/400/200',
    date: '20 Mar 2024',
    category: 'Kegiatan',
    priority: 'high',
    readTime: '2 menit',
  },
  {
    id: '2',
    title: 'Pembayaran Iuran Bulanan',
    description: 'Reminder pembayaran iuran bulanan Maret 2024. Transfer ke BCA 1234567890 a.n. Bendahara RT atau bayar langsung ke pengurus.',
    imageUrl: 'https://picsum.photos/400/201',
    date: '19 Mar 2024',
    category: 'Keuangan',
    priority: 'medium',
    readTime: '1 menit',
  },
  {
    id: '3',
    title: 'Rapat Rutin RT Bulan Maret',
    description: 'Rapat rutin RT dijadwalkan Sabtu, 23 Maret 2024 pukul 19.00 WIB di rumah Ketua RT. Agenda: program bulan April dan evaluasi kegiatan.',
    imageUrl: 'https://picsum.photos/400/202',
    date: '18 Mar 2024',
    category: 'Rapat',
    priority: 'medium',
    readTime: '3 menit',
  },
];

const Announcements = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / (CARD_WIDTH + CARD_MARGIN * 2));
    setActiveIndex(index);
  };

  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case 'high': 
        return { 
          color: '#DC3545', 
          bgColor: 'rgba(220, 53, 69, 0.1)',
          label: 'PENTING' 
        };
      case 'medium': 
        return { 
          color: '#FD7E14', 
          bgColor: 'rgba(253, 126, 20, 0.1)',
          label: 'NORMAL' 
        };
      case 'low': 
        return { 
          color: '#28A745', 
          bgColor: 'rgba(40, 167, 69, 0.1)',
          label: 'INFO' 
        };
      default: 
        return { 
          color: '#007BFF', 
          bgColor: 'rgba(0, 123, 255, 0.1)',
          label: 'INFO' 
        };
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>📢 Pengumuman Terbaru</Text>
          <Text style={styles.subtitle}>Tetap update dengan informasi RT/RW</Text>
        </View>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={CARD_WIDTH + CARD_MARGIN * 2}
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        {announcements.map((announcement, index) => {
          const priorityConfig = getPriorityConfig(announcement.priority);
          const isActive = index === activeIndex;
          
          return (
            <TouchableOpacity
              key={announcement.id}
              style={[
                styles.card,
                { transform: [{ scale: isActive ? 1 : 0.95 }] }
              ]}
              activeOpacity={0.9}
            >
              <ImageBackground
                source={{ uri: announcement.imageUrl }}
                style={styles.imageBackground}
                imageStyle={styles.imageStyle}
              >
                <View style={styles.gradientOverlay} />
                
                {/* Priority Badge */}
                <View style={[styles.priorityBadge, { backgroundColor: priorityConfig.color }]}>
                  <Text style={styles.priorityText}>{priorityConfig.label}</Text>
                </View>

                {/* Category & Read Time */}
                <View style={styles.topMeta}>
                  <View style={styles.categoryContainer}>
                    <Text style={styles.categoryText}>{announcement.category}</Text>
                  </View>
                  <Text style={styles.readTime}>{announcement.readTime}</Text>
                </View>

                {/* Content Section */}
                <View style={styles.cardContent}>
                  <View style={styles.dateContainer}>
                    <Text style={styles.cardDate}>{announcement.date}</Text>
                  </View>
                  
                  <Text style={styles.cardTitle} numberOfLines={2}>
                    {announcement.title}
                  </Text>
                  
                  <Text style={styles.cardDescription} numberOfLines={3}>
                    {announcement.description}
                  </Text>
                  
                  <View style={styles.actionContainer}>
                    <TouchableOpacity style={styles.readMoreButton}>
                      <Text style={styles.readMoreText}>Baca Selengkapnya →</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Enhanced Pagination */}
      <View style={styles.pagination}>
        {announcements.map((_, index) => {
          const priorityConfig = getPriorityConfig(announcements[index].priority);
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.paginationDot,
                index === activeIndex && [
                  styles.paginationDotActive,
                  { backgroundColor: priorityConfig.color }
                ]
              ]}
              onPress={() => {
                scrollViewRef.current?.scrollTo({
                  x: index * (CARD_WIDTH + CARD_MARGIN * 2),
                  animated: true,
                });
              }}
            />
          );
        })}
        
        <View style={styles.paginationInfo}>
          <Text style={styles.paginationText}>
            {activeIndex + 1} dari {announcements.length}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#212529',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6C757D',
    fontWeight: '500',
  },
  viewAllButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  viewAllText: {
    fontSize: 12,
    color: '#495057',
    fontWeight: '600',
  },
  scrollContent: {
    paddingHorizontal: CARD_MARGIN,
  },
  card: {
    width: CARD_WIDTH,
    height: 320,
    marginHorizontal: CARD_MARGIN,
    // marginBottom: 20,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  imageStyle: {
    borderRadius: 24,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  priorityBadge: {
    position: 'absolute',
    top: 20,
    right: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  priorityText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  topMeta: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  categoryContainer: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 8,
  },
  categoryText: {
    color: '#495057',
    fontSize: 12,
    fontWeight: '600',
  },
  readTime: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 11,
    fontWeight: '500',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  cardContent: {
    padding: 24,
    backgroundColor: 'rgba(255,255,255,0.98)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 160,
    minHeight: 160,
  },
  dateContainer: {
    marginBottom: 8,
  },
  cardDate: {
    fontSize: 12,
    color: '#6C757D',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 12,
    lineHeight: 26,
  },
  cardDescription: {
    fontSize: 14,
    color: '#495057',
    lineHeight: 22,
    marginBottom: 16,
  },
  actionContainer: {
    marginTop: 'auto',
    paddingTop: 12,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
  },
  readMoreText: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DEE2E6',
    marginHorizontal: 4,
    opacity: 0.5,
  },
  paginationDotActive: {
    width: 28,
    height: 8,
    borderRadius: 4,
    opacity: 1,
  },
  paginationInfo: {
    marginLeft: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
  },
  paginationText: {
    fontSize: 11,
    color: '#6C757D',
    fontWeight: '600',
  },
});

export default Announcements; 