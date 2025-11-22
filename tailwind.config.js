/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Muji-inspired Natural & Modern Color Palette
        primary: {
          50: '#F8F6F4',   // Lightest cream
          100: '#F0EDE8',  // Cream white
          200: '#E8E3DC',  // Soft beige
          300: '#D4CEC4',  // Warm gray
          400: '#B8AFA3',  // Medium warm gray
          500: '#9C9186',  // Main warm gray
          600: '#7D756C',  // Darker warm gray
          700: '#5F5952',  // Deep warm gray
          800: '#413E39',  // Almost black
          900: '#2A2824',  // Rich black
        },
        sage: {
          50: '#F5F8F7',   // Lightest sage
          100: '#E8F0ED',  // Soft sage
          200: '#D4E4DD',  // Light sage green
          300: '#B8D4C8',  // Medium sage
          400: '#9AC4B3',  // Calm sage
          500: '#7DB49E',  // Main sage green
          600: '#619180',  // Deep sage
          700: '#4A6F62',  // Darker sage
          800: '#344D45',  // Very dark sage
          900: '#1F2E28',  // Almost black sage
        },
        coral: {
          50: '#FEF5F3',   // Lightest coral
          100: '#FEEAE5',  // Soft coral
          200: '#FDD5CB',  // Light coral
          300: '#FBB8A8',  // Medium coral
          400: '#F99B85',  // Warm coral
          500: '#F77F63',  // Main coral (point color)
          600: '#E5634A',  // Deep coral
          700: '#C44A34',  // Darker coral
          800: '#9A3626',  // Very dark coral
          900: '#6B241A',  // Almost black coral
        },
        mint: {
          50: '#F4FAF8',   // Lightest mint
          100: '#E6F4F0',  // Soft mint
          200: '#CCE9E1',  // Light mint
          300: '#A8D9CC',  // Medium mint
          400: '#85C9B7',  // Calm mint
          500: '#62B9A2',  // Main mint
          600: '#4A9A84',  // Deep mint
          700: '#377A67',  // Darker mint
          800: '#265A4A',  // Very dark mint
          900: '#173A2E',  // Almost black mint
        },
        background: {
          ivory: '#FAFAFA',      // Main background
          cream: '#F8F6F4',      // Card background
          warmWhite: '#FFF9F5',  // Warm white
        },
      },
      fontFamily: {
        'noto-jp': ['Noto Sans JP', 'sans-serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',   // Minimum for 40-50 age group
        'lg': '18px',     // Comfortable for 40-50 age group
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'soft-md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.10)',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '26': '104px',
      },
    },
  },
  plugins: [],
}

