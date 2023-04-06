import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const Product = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 96px;

  border-radius: 8px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  gap: 8px;
`;

export const ProductPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(204, 204, 204, 0.5);
  margin: 24px 0;
`;
