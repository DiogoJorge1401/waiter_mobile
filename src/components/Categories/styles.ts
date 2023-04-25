import styled from 'styled-components/native';
import { isAndroid } from '../../utils/isAndroid';

export const Container = styled.View`
  min-height: 72px;
  margin-top: 32px;
`;

export const Category = styled.TouchableOpacity<{ isActive: boolean }>`
  align-items: center;
  padding: 4px;
  gap: 8px;
`;

export const Icon = styled.View<{ isActive: boolean }>`
  width: 44px;
  height: 44px;

  align-items: center;
  justify-content: center;

  background: #fff;
  border-radius: 20px;

  ${!isAndroid() && 'box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2)'};
  elevation: 2;
`;
