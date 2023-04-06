import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
  children: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const Button = ({
  children,
  disabled = false,
  onPress,
}: ButtonProps) => {

  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text color="#fff" weight="600">
        {children}
      </Text>
    </Container>
  );
};
