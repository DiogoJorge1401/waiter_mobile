import styled from 'styled-components/native';

export const ProductContainer = styled.TouchableOpacity`
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
