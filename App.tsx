import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { MainContext } from './src/contexts';
import { Main } from './src/main';

export default function App() {
  const [isLoaded, error] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isLoaded || error) return null;

  return (
    <MainContext>
      <StatusBar barStyle="light-content" />
      <Main />
    </MainContext>
  );
}
