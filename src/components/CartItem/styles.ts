import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 12px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 48px;
  height: 40px;
  border-radius: 4px;
  margin-right: 4px;
`;

export const ProductDetails = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const PriceContainer = styled.View`
  gap: 4px;
`;

export const Actions = styled.View`
  flex-direction: row;
  gap: 24px;
`;
