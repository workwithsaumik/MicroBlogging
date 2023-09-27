/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "twtrblue_default": "#1D9BF0",
        "twtrblue_hover": "#1871CA",
        "twtrblue_disabled": "#1E5D87",
        "blue_wash": "#75BEEF33",
        "stroke": "#1D9BF03D",
        "searchbar_fill": "#212327",
        "card_fill": "#16181C",
        "green_success": "#00BE74",
        "red_error": "#8B141A",
        "neutral_50": "#F9F9F9",
        "neutral_100": "#F4F4F4",
        "neutral_200": "#E4E4E4",
        "neutral_300": "#D3D3D3",
        "neutral_400": "#A2A2A2",
        "neutral_500": "#737373",
        "neutral_700": "#404040",
        "neutral_800": "#262626",
        "neutral_950": "#0A0A0A",
        "neutral_900": "#171717",
        "neutral_1000": "#000000",
        "default-bg": "#040404",
      },
      fontSize: {
        "48": "48px",
        "31": "31px",
        "26": "26px",
        "24": "24px",
        "20": "20px",
        "19": "19px",
        "17": "17px",
        "16": "1rem",
        "15": "15px",
        "14": "0.875rem",
        "13": "13px",
        "12": "12px",
        "10": "10px",
      },
      borderRadius: {
        "custom4.0625": "4.0625rem",
        "custom1.875rem": "1.875rem",
        "custom624.9375rem":"624.9375rem",
        "custom6249.9375rem": "6249.9375rem"
      },
      width: {
        "custom20.875rem": "20.875rem",
        'custom27.625rem': '27.625rem',
        "custom26.625rem": "26.625rem",
        "custom32rem": "32rem",
        "custom36rem": "36rem",
        "custom37.375rem": "37.375rem",
      },
      boxShadow: {
        "custom": "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        "custom": "23.668209075927734px",
      },
      lineHeight: {
        "custom": "normal",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        'chirp': ['Chirp', 'sans-serif'],
      },
      fontWeight: {
        'custom': '700',
      },
      borderWidth: {
        '1': '1px',
      },
    },
    variants: {
      extend: {
        textColor: ['disabled'],
      },
    },
  },
  plugins: [],
};
