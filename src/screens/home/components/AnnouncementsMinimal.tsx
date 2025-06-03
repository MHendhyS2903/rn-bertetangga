import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';

interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  isUrgent: boolean;
  category: string;
  location?: string;
  contact?: string;
  additionalInfo?: string;
  attachments?: string[];
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;

const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Gotong Royong Lingkungan',
    description: 'Kegiatan bersih-bersih lingkungan RW akan dilaksanakan hari ini. Mari kita jaga kebersihan lingkungan kita bersama-sama.',
    date: 'Hari ini',
    time: '07:00',
    isUrgent: true,
    category: 'Kegiatan',
    location: 'Lapangan RW 05',
    contact: 'Pak RT (0812-3456-7890)',
    additionalInfo: 'Siapkan peralatan kebersihan seperti sapu, pengki, dan kantong sampah. Makanan dan minuman akan disediakan panitia.asd asdasdasd hasld lksajd lksalkdj lsajdlka jsdaskl jdlja lsdjlksa jdlk jaslkdjalks jdlkaj lkaj dsalkjdsa l, Siapkan peralatan kebersihan seperti sapu, pengki, dan kantong sampah. Makanan dan minuman akan disediakan panitia.asd asdasdasd hasld lksajd lksalkdj lsajdlka jsdaskl jdlja lsdjlksa jdlk jaslkdjalks jdlkaj lkaj dsalkjdsa l',
    attachments: ['Jadwal Kegiatan.pdf', 'Peta Lokasi.jpg']
  },
  {
    id: '2',
    title: 'Iuran Bulanan Maret',
    description: 'Pembayaran iuran bulan Maret sudah dapat dilakukan. Mohon segera menyelesaikan pembayaran sebelum tanggal 25 Maret 2024.',
    date: 'Kemarin',
    time: '14:30',
    isUrgent: false,
    category: 'Keuangan',
    contact: 'Bendahara RW (0813-4567-8901)',
    additionalInfo: 'Pembayaran dapat dilakukan melalui transfer bank atau langsung ke bendahara RW setiap hari Senin-Jumat pukul 16.00-20.00 WIB.',
    attachments: ['Rincian Iuran.pdf']
  },
  {
    id: '3',
    title: 'Rapat Koordinasi RT',
    description: 'Undangan rapat koordinasi untuk pengurus RT. Akan membahas program kerja dan evaluasi kegiatan bulan lalu.',
    date: '18 Mar',
    time: '19:00',
    isUrgent: false,
    category: 'Rapat',
    location: 'Balai RW 05',
    contact: 'Sekretaris RT (0814-5678-9012)',
    additionalInfo: 'Mohon membawa proposal kegiatan yang akan dilaksanakan bulan depan. Rapat akan dihadiri oleh seluruh pengurus RT.',
    attachments: ['Agenda Rapat.pdf', 'Proposal Template.docx']
  },
  {
    id: '4',
    title: 'Program Vaksinasi',
    description: 'Pendaftaran vaksinasi COVID-19 gelombang ke-4. Program ini diperuntukkan bagi warga yang belum mendapatkan vaksin.',
    date: '17 Mar',
    time: '10:00',
    isUrgent: true,
    category: 'Kesehatan',
    location: 'Puskesmas Kelurahan',
    contact: 'Koordinator Vaksinasi (0815-6789-0123)',
    additionalInfo: 'Pendaftaran dapat dilakukan secara online atau langsung ke posko vaksinasi. Siapkan KTP dan kartu keluarga. Vaksinasi gratis untuk semua warga.',
    attachments: ['Jadwal Vaksinasi.pdf', 'Form Pendaftaran.pdf', 'Syarat Vaksinasi.pdf']
  },
  {
    id: '5',
    title: 'Pemadaman Listrik',
    description: 'Akan dilakukan pemadaman listrik terjadwal untuk pemeliharaan jaringan. Mohon persiapkan genset atau sumber listrik alternatif.',
    date: '16 Mar',
    time: '09:00',
    isUrgent: true,
    category: 'Infrastruktur',
    location: 'Seluruh RW 05',
    contact: 'PLN (123)',
    additionalInfo: 'Pemadaman akan dilakukan selama 4 jam. Pastikan peralatan elektronik dalam kondisi aman. Genset RW akan dioperasikan untuk kebutuhan darurat.',
    attachments: ['Jadwal Pemadaman.pdf', 'Peta Area.pdf']
  },
  {
    id: '6',
    title: 'Bazar Ramadhan',
    description: 'Bazar Ramadhan akan diselenggarakan di lingkungan RW. Menjual berbagai kebutuhan puasa dengan harga terjangkau.',
    date: '15 Mar',
    time: '16:00',
    isUrgent: false,
    category: 'Kegiatan',
    location: 'Lapangan RW 05',
    contact: 'Panitia Bazar (0816-7890-1234)',
    additionalInfo: 'Bazar akan berlangsung selama 2 minggu. Terbuka untuk umum. Stand dapat disewa dengan harga terjangkau. Ada doorprize setiap hari.',
    attachments: ['Jadwal Bazar.pdf', 'Form Pendaftaran Stand.pdf', 'Peta Lokasi.pdf']
  }
];

const AnnouncementsMinimal = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  const handlePress = (item: Announcement) => {
    setSelectedAnnouncement(item);
  };

  const handleClose = () => {
    setSelectedAnnouncement(null);
  };

  const renderItem = ({ item }: { item: Announcement }) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      activeOpacity={0.7}
      onPress={() => handlePress(item)}
    >
      <View style={styles.topSection}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{item.category}</Text>
          {item.isUrgent && (
            <View style={styles.urgentBadge}>
              <Text style={styles.urgentText}>URGENT</Text>
            </View>
          )}
        </View>
        <Text style={styles.dateTime}>
          {item.date} • {item.time}
        </Text>
      </View>
      
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      
      <Text style={styles.description} numberOfLines={1}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Pengumuman</Text>
        </View>
        <TouchableOpacity style={styles.lihatSemuaButton}>
          <Text style={styles.lihatSemuaText}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={announcements}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        snapToInterval={CARD_WIDTH + 16}
        decelerationRate="fast"
        snapToAlignment="center"
      />

      <Modal
        visible={selectedAnnouncement !== null}
        transparent
        animationType="fade"
        onRequestClose={handleClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView 
              style={styles.modalScroll}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.modalScrollContent}
            >
              <View style={styles.modalHeader}>
                <View style={styles.modalCategoryContainer}>
                  <Text style={styles.modalCategory}>{selectedAnnouncement?.category}</Text>
                  {selectedAnnouncement?.isUrgent && (
                    <View style={styles.urgentBadge}>
                      <Text style={styles.urgentText}>URGENT</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.modalDateTime}>
                  {selectedAnnouncement?.date} • {selectedAnnouncement?.time}
                </Text>
              </View>

              <Text style={styles.modalTitle}>{selectedAnnouncement?.title}</Text>
              <Text style={styles.modalDescription}>{selectedAnnouncement?.description}</Text>

              {selectedAnnouncement?.location && (
                <View style={styles.detailSection}>
                  <Text style={styles.detailLabel}>Lokasi:</Text>
                  <Text style={styles.detailText}>{selectedAnnouncement.location}</Text>
                </View>
              )}

              {selectedAnnouncement?.contact && (
                <View style={styles.detailSection}>
                  <Text style={styles.detailLabel}>Kontak:</Text>
                  <Text style={styles.detailText}>{selectedAnnouncement.contact}</Text>
                </View>
              )}

              {selectedAnnouncement?.additionalInfo && (
                <View style={styles.detailSection}>
                  <Text style={styles.detailLabel}>Informasi Tambahan:</Text>
                  <Text style={styles.detailText}>{selectedAnnouncement.additionalInfo}</Text>
                </View>
              )}

              {selectedAnnouncement?.attachments && selectedAnnouncement.attachments.length > 0 && (
                <View style={styles.detailSection}>
                  <Text style={styles.detailLabel}>Lampiran:</Text>
                  {selectedAnnouncement.attachments.map((attachment, index) => (
                    <TouchableOpacity key={index} style={styles.attachmentButton}>
                      <Text style={styles.attachmentText}>{attachment}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </ScrollView>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={handleClose}
            >
              <Text style={styles.closeButtonText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212529',
  },
  lihatSemuaButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
  },
  lihatSemuaText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#495057',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  itemContainer: {
    width: CARD_WIDTH,
    marginRight: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  category: {
    fontSize: 12,
    color: '#495057',
    fontWeight: '600',
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  urgentBadge: {
    backgroundColor: '#DC3545',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  urgentText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  dateTime: {
    fontSize: 12,
    color: '#ADB5BD',
    fontWeight: '500',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#6C757D',
    lineHeight: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalScroll: {
    maxHeight: '90%',
  },
  modalScrollContent: {
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalCategoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  modalCategory: {
    fontSize: 14,
    color: '#495057',
    fontWeight: '600',
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  modalDateTime: {
    fontSize: 14,
    color: '#ADB5BD',
    fontWeight: '500',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 16,
    color: '#495057',
    lineHeight: 24,
    marginBottom: 16,
  },
  detailSection: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 15,
    color: '#212529',
    lineHeight: 22,
  },
  attachmentButton: {
    backgroundColor: '#F8F9FA',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  attachmentText: {
    fontSize: 14,
    color: '#495057',
    fontWeight: '500',
  },
  closeButton: {
    backgroundColor: '#F8F9FA',
    padding: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
  },
});

export default AnnouncementsMinimal; 