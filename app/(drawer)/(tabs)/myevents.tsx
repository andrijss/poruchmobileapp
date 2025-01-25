import { StyleSheet, Image, Platform } from 'react-native';

import TopBar from '@/components/TopBar';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
      <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <TopBar
            text={'Мої події'}
            backButton={false}
            buttons={true}
            notifications={false}
            blur={true}
        />
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
