import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

export const Button = ({
  children,
  disabled = false,
  loading = false,
  onPress,
}: ButtonProps) => {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading ? (
        <Text color="#fff" weight="600">
          {children}
        </Text>
      ) : (
        <ActivityIndicator color="#fff" />
      )}
    </Container>
  );
};
