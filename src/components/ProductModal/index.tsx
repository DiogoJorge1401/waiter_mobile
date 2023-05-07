import { Modal } from 'react-native';
import { useProduct } from '../../contexts/product';
import { useTable } from '../../contexts/table';
import { formatCurrency } from '../../utils/formatCurrency';
import { getImageURI } from '../../utils/getImageURI';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { ProductModalIngredients } from '../ProductModalIngredients';
import { Text } from '../Text';
import {
  CloseButton,
  Container,
  Content,
  Footer,
  Header,
  Image,
  ProductDetails,
} from './styles';

export const ProductModal = () => {
  const {
    isProductModalVisible,
    activeProduct,
    handleCloseProductModal,
    addActiveProduct,
  } = useProduct();

  const { table, handleShowTableModal } = useTable();

  const handleAddProduct = () => {
    if (!table) return handleShowTableModal(addActiveProduct);
    addActiveProduct();
  };

  return (
    <Modal
      animationType="slide"
      visible={isProductModalVisible}
      onRequestClose={handleCloseProductModal}
    >
      <Container>
        <Image
          source={{
            uri: getImageURI(activeProduct.imagePath),
          }}
        >
          <CloseButton onPress={handleCloseProductModal}>
            <Close />
          </CloseButton>
        </Image>

        <Content>
          <Header>
            <Text weight="600" size={24}>
              {activeProduct.name}
            </Text>
            <Text color="#666">{activeProduct.description}</Text>
          </Header>

          <ProductModalIngredients />
        </Content>

        <Footer>
          <ProductDetails>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">
              {formatCurrency(activeProduct.price)}
            </Text>
          </ProductDetails>

          <Button onPress={handleAddProduct}>Adicionar ao Pedido</Button>
        </Footer>
      </Container>
    </Modal>
  );
};
