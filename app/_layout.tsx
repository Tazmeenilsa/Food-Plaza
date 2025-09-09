import FontLoader from '@/components/FontLoader';
import { Stack } from "expo-router";
import { ThemeProvider } from '../theme/ThemeContext';

import { Provider } from 'react-redux';
import { store } from './redux/store';
export default function RootLayout() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
