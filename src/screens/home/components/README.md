# 📢 Komponen Announcements - Panduan Design

## 🎨 **4 Variasi Design Tersedia**

### **1. Modern Glass Morphism (Default)** 
📁 `Announcements.tsx`
- **Style**: Card horizontal dengan efek glass morphism
- **Features**: Priority badges, category tags, read time, enhanced pagination
- **Design**: Flat design tanpa shadow, border subtle dengan margin bottom
- **Cocok untuk**: Design modern dan eye-catching dengan informasi detail

### **2. Minimal List Style** 
📁 `AnnouncementsMinimal.tsx`
- **Style**: List vertikal dengan design minimal dan clean
- **Features**: Urgent indicators, category badges, timestamp
- **Design**: Flat card dengan border dan spacing optimal
- **Cocok untuk**: Aplikasi dengan style minimalis dan space terbatas

### **3. Grid Layout dengan Icons**
📁 `AnnouncementsGrid.tsx` 
- **Style**: Grid 2 kolom dengan icon SVG dan color coding
- **Features**: Icon categories, action buttons, "BARU" badges
- **Design**: Clean cards tanpa shadow dengan consistent spacing
- **Cocok untuk**: Menampilkan banyak info dalam layout compact

### **4. Timeline/Feed Style**
📁 `AnnouncementsTimeline.tsx`
- **Style**: Timeline vertikal mirip social media feed
- **Features**: Author info, reactions, comments, timeline visual
- **Design**: Flat cards dengan border dan proper margin
- **Cocok untuk**: Interaksi sosial dan engagement tinggi

---

## 🔄 **Cara Mengganti Design**

### **Opsi 1: Import dan Ganti Komponen**
```typescript
// Di file src/screens/home/HomeScreen.tsx
import AnnouncementsMinimal from './components/AnnouncementsMinimal';
import AnnouncementsGrid from './components/AnnouncementsGrid';
import AnnouncementsTimeline from './components/AnnouncementsTimeline';

// Ganti komponen default dengan salah satu:
<AnnouncementsMinimal />
// atau
<AnnouncementsGrid />
// atau  
<AnnouncementsTimeline />
```

### **Opsi 2: Rename File (Recommended)**
```bash
# Backup file saat ini
mv Announcements.tsx AnnouncementsGlass.tsx

# Ganti dengan design pilihan
mv AnnouncementsGrid.tsx Announcements.tsx
```

---

## 📋 **Struktur Data Announcement**

### **Glass Morphism & Timeline**
```typescript
interface Announcement {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  date: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  readTime?: string;
  // Timeline specific:
  author?: string;
  role?: string;
  reactions?: number;
  comments?: number;
}
```

### **Minimal & Grid**
```typescript
interface Announcement {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  date: string;
  time?: string;
  category: string;
  isUrgent?: boolean;
  isNew?: boolean;
  icon?: string; // SVG path for Grid
  color?: string;
  bgColor?: string;
}
```

---

## 🎯 **Rekomendasi Penggunaan**

| Use Case | Recommended Design |
|----------|-------------------|
| RT/RW Digital Modern | Glass Morphism |
| Admin Dashboard | Minimal List |
| Mobile App Compact | Grid Layout |
| Community Platform | Timeline Feed |

---

## ⚙️ **Kustomisasi Warna**

### **Priority Colors**
```typescript
const colors = {
  high: '#DC3545',    // Red - Urgent/Penting
  medium: '#FD7E14',  // Orange - Normal
  low: '#28A745',     // Green - Info
  info: '#007BFF'     // Blue - Default
};
```

### **Theme Colors**
```typescript
const theme = {
  primary: '#007BFF',
  background: '#F8F9FA',
  text: '#212529',
  textMuted: '#6C757D',
  border: '#E9ECEF'
};
```

---

## 📱 **Preview Screenshots**

1. **Glass Morphism**: Carousel horizontal dengan glass effect
2. **Minimal**: List vertikal dengan spacing optimal  
3. **Grid**: 2x2 grid dengan icons dan colors
4. **Timeline**: Feed vertikal dengan avatar dan engagement

---

*Pilih design yang sesuai dengan brand dan user experience aplikasi RT/RW Anda!* 🏘️ 