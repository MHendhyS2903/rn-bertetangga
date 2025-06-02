import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, LayoutAnimation, Platform, UIManager } from 'react-native';
import { mdiCash, mdiAlertCircle, mdiCalendar, mdiBullhorn, mdiAccountGroup, mdiFileDocument, mdiCog, mdiChartBar, mdiPhone, mdiEmail, mdiChevronDoubleDown, mdiChevronDoubleUp } from '@mdi/js';
import Svg, { Path } from 'react-native-svg';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

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

const quickActions = [
  { 
    id: 1, 
    title: 'Bayar Iuran', 
    icon: mdiCash,
    color: '#FA812F',
    bgColor: '#FFFDF6',
  },
  { 
    id: 2, 
    title: 'Lapor Masalah', 
    icon: mdiAlertCircle,
    color: '#FA812F',
    bgColor: '#FFFDF6',
  },
  { 
    id: 3, 
    title: 'Kegiatan', 
    icon: mdiCalendar,
    color: '#FA812F',
    bgColor: '#FFFDF6',
  },
  { 
    id: 4, 
    title: 'Pengumuman', 
    icon: mdiBullhorn,
    color: '#FA812F',
    bgColor: '#FFFDF6',
  },
  { 
    id: 5, 
    title: 'Warga', 
    icon: mdiAccountGroup,
    color: '#FA812F',
    bgColor: '#FFFDF6',
  },
  { 
    id: 6, 
    title: 'Dokumen', 
    icon: mdiFileDocument,
    color: '#FA812F',
    bgColor: '#FFFDF6',
  },
  { 
    id: 7, 
    title: 'Pengaturan', 
    icon: mdiCog,
    color: '#FA812F',
    bgColor: '#FFFDF6',
  },
  { 
    id: 8, 
    title: 'Statistik', 
    icon: mdiChartBar,
    color: '#FA812F',
    bgColor: '#FFFDF6',
  },
  { 
    id: 9, 
    title: 'Kontak', 
    icon: mdiPhone,
    color: '#FA812F',
    bgColor: '#FFFDF6',
  },
  { 
    id: 10, 
    title: 'Pesan', 
    icon: mdiEmail,
    color: '#FA812F',
    bgColor: '#FFFDF6',
  },
];

const QuickActions = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedActions = showAll ? quickActions : quickActions.slice(0, 5);
  
  // Animation values
  const arrowAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const continuousAnim = useRef(new Animated.Value(0)).current;

  // Continuous animation
  useEffect(() => {
    const startContinuousAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(continuousAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(continuousAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startContinuousAnimation();
  }, [continuousAnim]);

  const toggleShowAll = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
    // Reset animations
    arrowAnim.setValue(showAll ? 1 : 0);
    bounceAnim.setValue(0);

    // Start animations
    Animated.parallel([
      Animated.timing(arrowAnim, {
        toValue: showAll ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    setShowAll(!showAll);
  };

  const translateY = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 5],
  });

  const continuousTranslateY = continuousAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 12],
  });

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.grid}>
          {displayedActions.map((action) => (
            <TouchableOpacity
              key={action.id}
              style={[styles.actionButton, { backgroundColor: action.bgColor }]}
              onPress={() => {}}
            >
              <Icon path={action.icon} size={24} color={action.color} />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={toggleShowAll}
        >
          <Animated.View style={{ 
            transform: [
              { translateY: Animated.add(translateY, continuousTranslateY) }
            ] 
          }}>
            {showAll ? (
              <Icon path={mdiChevronDoubleUp} size={28} color="#FA812F" />
            ) : (
              <Icon path={mdiChevronDoubleDown} size={28} color="#FA812F" />
            )}
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  backgroundContainer: {
    borderRadius: 16,
    padding: 12,
    backgroundColor: '#FBDB93',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    paddingHorizontal: 4,
  },
  actionButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  toggleButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 4,
  },
});

export default QuickActions; 