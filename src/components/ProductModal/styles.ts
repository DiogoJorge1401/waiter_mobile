import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 24px;
  top: 24px;

  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
`;

export const Content = styled.View`
  padding: 32px 24px 0;

  flex: 1;
  gap: 32px;

  background: #fafafa;
`;

export const Header = styled.View`
  gap: 8px;
`;


export const Footer = styled.View`
  min-height: 112px;
  padding: 16px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #fff;
`;

export const ProductDetails = styled.View`
`;
