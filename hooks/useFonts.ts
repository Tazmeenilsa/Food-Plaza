import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    useFonts as usePoppins,
} from '@expo-google-fonts/poppins';

// This will be used to track if fonts are already loaded
let fontCache: { [key: string]: boolean } = {
  loaded: false,
};

export const useFonts = () => {
  const [fontsLoaded] = usePoppins({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

  return fontsLoaded;
};
