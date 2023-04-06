import { useState } from 'react';
import { Categories } from '../components/Categories';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { TableModal } from '../components/TableModal';
import { Container } from './styles';

export type Product = {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: {
    name: string;
    icon: string;
    _id: string;
  }[];
};

export const Main = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [productsInCar, setProductsInCar] = useState<Product[]>([]);
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [order, setOrder] = useState<null | Record<string, string>>(null);

  const handleSelectCategory = (id: string) => () => {
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  const handleSetProductsInCar = (product: Product) => {
    const idx = productsInCar.findIndex((p) => p._id === product._id);

    if (idx !== -1) {
      setProductsInCar(productsInCar.filter((p) => p._id !== product._id));
    } else {
      setProductsInCar((prev) => [...prev, product]);
    }
  };

  const handleShowTableModal = () => {
    setIsTableModalVisible((prev) => !prev);
  };

  const handleSaveTable = (table: string) => {
    setOrder({ table });
    alert('Pedido realizado com sucesso!');
  };

  const handleCloseModal = () => {
    setIsTableModalVisible(false);
  };

  return (
    <Container>
      <Header selectedOrder={order} />

      <Categories
        onSelectActiveCategory={handleSelectCategory}
        activeCategory={activeCategory}
      />

      <Menu setProductsInCar={handleSetProductsInCar} />

      <Footer showTableModal={handleShowTableModal} selectedOrder={order} />

      <TableModal
        closeModal={handleCloseModal}
        visible={isTableModalVisible}
        onSave={handleSaveTable}
      />
    </Container>
  );
};
