import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 16px 24px;
  align-items: center;
  justify-content: center;

  background: ${({ disabled }) => (disabled ? '#999' : '#d73035')};
  border-radius: 48px;
`;
