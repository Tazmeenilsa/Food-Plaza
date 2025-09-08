import { colors } from '@/theme/colors';
import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet, TextStyle } from 'react-native';

type FontWeight = 'normal' | 'medium' | 'semiBold' | 'bold';

type TextProps = RNTextProps & {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'button';
  fontWeight?: FontWeight;
};

// Map our custom weight names to React Native's fontWeight values
const FONT_WEIGHTS: Record<FontWeight, TextStyle['fontWeight']> = {
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;

const Text: React.FC<TextProps> = ({
  variant = 'body',
  fontWeight = 'normal',
  style,
  children,
  ...props
}) => {
  const getFontFamily = (): TextStyle => {
    let fontFamily = 'Poppins-Regular';
    
    switch (fontWeight) {
      case 'medium':
        fontFamily = 'Poppins-Medium';
        break;
      case 'semiBold':
        fontFamily = 'Poppins-SemiBold';
        break;
      case 'bold':
        fontFamily = 'Poppins-Bold';
        break;
      default:
        fontFamily = 'Poppins-Regular';
    }
    
    return {
      fontFamily,
      // Remove fontWeight as we're using specific font families
    };
  };

  const getVariantStyle = () => {
    switch (variant) {
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'h3':
        return styles.h3;
      case 'h4':
        return styles.h4;
      case 'caption':
        return styles.caption;
      case 'button':
        return styles.button;
      default:
        return styles.body;
    }
  };

  return (
    <RNText
      style={[getVariantStyle(), getFontFamily(), style]}
      {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.4,
  },
  h4: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.4,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    fontSize: 16,
    lineHeight: 24,
    textTransform: 'uppercase',
    letterSpacing: 0.5,

    color:colors.white
  },
});

export default Text;
