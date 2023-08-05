import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e', // black
    textSecondary: '#fff', // white
    textOther: '#586069', // grey
    primary: '#0366d6', // blue
    secondary: '#24292e', // black
    backgroundPrimary: '#e1e4e8', // grey
    backgroundSecondary: '#fff', // white
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
}

export default theme