import { Image, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.headerContainer}>
          <Image
            source={require('@/assets/images/sunset.png')}
            style={styles.headerImage}
          />
          <View style={styles.overlay}>
            <ThemedText type="title" style={styles.headerText}>Explore</ThemedText>
          </View>
        </View>
      }>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    alignSelf: 'center',
    height: 400,
    width: 400,
  },
  headerImage: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 34,
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});