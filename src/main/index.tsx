import { ActivityIndicator } from 'react-native';
import { Categories } from '../components/Categories';
import { CenteredContainer } from '../components/CenteredContainer';
import { ConfirmedOrderModal } from '../components/ConfirmedOrderModal';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { ProductModal } from '../components/ProductModal';
import { TableModal } from '../components/TableModal';
import { useApp } from '../context/app';
import { Container } from './styles';
import { useProduct } from '../context/product';

export const Main = () => {
  const { isAppLoading } = useApp();
  const { isFetchingProducts } = useProduct();

  return (
    <>
      <TableModal />

      <ConfirmedOrderModal />

      <ProductModal />

      <Container>
        <Header />

        {isAppLoading ? (
          <CenteredContainer>
            <ActivityIndicator color="#d73035" size="large" />
          </CenteredContainer>
        ) : (
          <>
            <Categories />

            {isFetchingProducts ? (
              <CenteredContainer>
                <ActivityIndicator color="#d73035" size="large" />
              </CenteredContainer>
            ) : (
              <Menu />
            )}
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};
