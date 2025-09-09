import FontLoader from '@/components/FontLoader';
import { Stack } from "expo-router";
import { ThemeProvider } from '../theme/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <FontLoader>
        <Stack
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="(tabs)"  />
          <Stack.Screen name='checkout'/>
        </Stack>
      </FontLoader>
    </ThemeProvider>
  );
}
