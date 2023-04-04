import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

console.log({
  isAndroid,
  StatusBarHeight: StatusBar.currentHeight,
});

export const Container = styled.SafeAreaView`
  padding: 24px;
`;
