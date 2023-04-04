import { Text } from '../Text';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <Text size={14} color="#333" opacity={0.9}>
        Bem vindo(a) ao
      </Text>

      <Text size={24} weight="700">
        RAPID
        <Text size={24}>
          SERVE
        </Text>
      </Text>
    </Container>
  );
};
