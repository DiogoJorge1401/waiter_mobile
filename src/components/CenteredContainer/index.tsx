import { Container } from './styles';

export const CenteredContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Container>{children}</Container>;
};
