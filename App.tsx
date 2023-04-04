import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Main } from './src/main';

export default function App() {
  const [isLoading, error] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-500': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isLoading || error) return null;

  return (
    <>
      <Main />
      <StatusBar barStyle="light-content" />
    </>
  );
}
