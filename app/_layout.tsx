import { Stack } from "expo-router";
import { ThemeProvider } from '../theme/ThemeContext';
import FontLoader from '@/components/FontLoader';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <FontLoader>
        <Stack
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="(tabs)"  />
        </Stack>
      </FontLoader>
    </ThemeProvider>
  );
}
