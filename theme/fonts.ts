import { Platform } from 'react-native';

export const fontConfig = {
  Poppins: {
    100: {
      normal: 'Poppins-Thin',
      italic: 'Poppins-ThinItalic',
    },
    200: {
      normal: 'Poppins-ExtraLight',
      italic: 'Poppins-ExtraLightItalic',
    },
    300: {
      normal: 'Poppins-Light',
      italic: 'Poppins-LightItalic',
    },
    400: {
      normal: 'Poppins-Regular',
      italic: 'Poppins-Italic',
    },
    500: {
      normal: 'Poppins-Medium',
      italic: 'Poppins-MediumItalic',
    },
    600: {
      normal: 'Poppins-SemiBold',
      italic: 'Poppins-SemiBoldItalic',
    },
    700: {
      normal: 'Poppins-Bold',
      italic: 'Poppins-BoldItalic',
    },
    800: {
      normal: 'Poppins-ExtraBold',
      italic: 'Poppins-ExtraBoldItalic',
    },
    900: {
      normal: 'Poppins-Black',
      italic: 'Poppins-BlackItalic',
    },
  },
};

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
};

export const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

export const typography = {
  fontConfig,
  fonts: {
    heading: Platform.select({ ios: 'Poppins', android: 'Poppins' }),
    body: Platform.select({ ios: 'Poppins', android: 'Poppins' }),
    mono: Platform.select({ ios: 'Poppins', android: 'Poppins' }),
  },
  fontSizes,
  fontWeights,
};
