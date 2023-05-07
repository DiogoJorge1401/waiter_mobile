import { CategoryProvider } from './category';
import { AppProvider } from './app';
import { OrderProvider } from './order';
import { ProductProvider } from './product';
import { TableProvider } from './table';

export const MainContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProductProvider>
      <CategoryProvider>
        <TableProvider>
          <OrderProvider>
            <AppProvider>{children}</AppProvider>
          </OrderProvider>
        </TableProvider>
      </CategoryProvider>
    </ProductProvider>
  );
};
