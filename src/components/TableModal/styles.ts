import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  padding: 24px;

  flex: 1;
  justify-content: center;
  align-items: stretch;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalBody = styled.View`
  padding: 24px;
  gap: 32px;
  background: #fafafa;
  border-radius: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.View`
  gap: 24px;
`;

export const Input = styled.TextInput`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
`;
