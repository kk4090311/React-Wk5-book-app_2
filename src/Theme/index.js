import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     light400: '# a8a29e',
     primary700: '#6200EE',
     primary100: '#cffafe',
     light500: '#666666',
   },
 };

 export default MyTheme;