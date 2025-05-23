import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedView } from '@/components/ThemedView';
import AppIntro from '@/components/Intro';

export default function RootLayout() {
  const [showSliders, setShowSliders] = useState<boolean | null>(null);

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded && showSliders === null) {
      setShowSliders(true);
    }
  }, [loaded]);

  if (!loaded || showSliders === null) {
    return (
      <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
        <ActivityIndicator size="large" color="blue" />
      </ThemedView>
    );
  }

  if (showSliders) {
    return <AppIntro onDone={() => setShowSliders(false)} />;
  }

  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </ThemedView>
  );
}
