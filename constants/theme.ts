// Muji-inspired Design System
export const LIGHT_COLORS = {
  // Primary warm grays
  primary: {
    50: '#F8F6F4',
    100: '#F0EDE8',
    200: '#E8E3DC',
    300: '#D4CEC4',
    400: '#B8AFA3',
    500: '#9C9186',
    600: '#7D756C',
    700: '#5F5952',
    800: '#413E39',
    900: '#2A2824',
  },
  // Sage green for focus
  sage: {
    50: '#F5F8F7',
    100: '#E8F0ED',
    200: '#D4E4DD',
    300: '#B8D4C8',
    400: '#9AC4B3',
    500: '#7DB49E',
    600: '#619180',
    700: '#4A6F62',
    800: '#344D45',
    900: '#1F2E28',
  },
  // Coral for points/accents
  coral: {
    50: '#FEF5F3',
    100: '#FEEAE5',
    200: '#FDD5CB',
    300: '#FBB8A8',
    400: '#F99B85',
    500: '#F77F63',
    600: '#E5634A',
    700: '#C44A34',
    800: '#9A3626',
    900: '#6B241A',
  },
  // Mint for calm
  mint: {
    50: '#F4FAF8',
    100: '#E6F4F0',
    200: '#CCE9E1',
    300: '#A8D9CC',
    400: '#85C9B7',
    500: '#62B9A2',
    600: '#4A9A84',
    700: '#377A67',
    800: '#265A4A',
    900: '#173A2E',
  },
  // Backgrounds
  background: {
    ivory: '#FAFAFA',
    cream: '#F8F6F4',
    warmWhite: '#FFF9F5',
  },
};

export const DARK_COLORS = {
  // Primary cool grays for dark mode
  primary: {
    50: '#2A2824',
    100: '#413E39',
    200: '#5F5952',
    300: '#7D756C',
    400: '#9C9186',
    500: '#B8AFA3',
    600: '#D4CEC4',
    700: '#E8E3DC',
    800: '#F0EDE8',
    900: '#F8F6F4',
  },
  // Sage green (slightly brighter for dark mode)
  sage: {
    50: '#1F2E28',
    100: '#344D45',
    200: '#4A6F62',
    300: '#619180',
    400: '#7DB49E',
    500: '#9AC4B3',
    600: '#B8D4C8',
    700: '#D4E4DD',
    800: '#E8F0ED',
    900: '#F5F8F7',
  },
  // Coral (slightly muted for dark mode)
  coral: {
    50: '#6B241A',
    100: '#9A3626',
    200: '#C44A34',
    300: '#E5634A',
    400: '#F77F63',
    500: '#F99B85',
    600: '#FBB8A8',
    700: '#FDD5CB',
    800: '#FEEAE5',
    900: '#FEF5F3',
  },
  // Mint
  mint: {
    50: '#173A2E',
    100: '#265A4A',
    200: '#377A67',
    300: '#4A9A84',
    400: '#62B9A2',
    500: '#85C9B7',
    600: '#A8D9CC',
    700: '#CCE9E1',
    800: '#E6F4F0',
    900: '#F4FAF8',
  },
  // Dark backgrounds
  background: {
    ivory: '#1A1918',
    cream: '#252321',
    warmWhite: '#2F2D2A',
  },
};

export const COLORS = LIGHT_COLORS;

export const TYPOGRAPHY = {
  fontFamily: {
    regular: 'Noto Sans JP',
    medium: 'Noto Sans JP Medium',
    bold: 'Noto Sans JP Bold',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,  // Minimum for 40-50 age group
    lg: 18,    // Comfortable for 40-50 age group
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
};

export const SHADOWS = {
  soft: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  softMd: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  softLg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.10,
    shadowRadius: 24,
    elevation: 8,
  },
};
