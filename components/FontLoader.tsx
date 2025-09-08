import { useFonts } from '@/hooks/useFonts';
import { View, ActivityIndicator } from 'react-native';
import { ReactNode } from 'react';

interface FontLoaderProps {
  children: ReactNode;
}

export default function FontLoader({ children }: FontLoaderProps) {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
}
