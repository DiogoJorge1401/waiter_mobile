import { CategoryProvider } from './category';
import { AppProvider } from './app/context';
import { OrderProvider } from './order';
import { ProductProvider } from './product';
import { TableProvider } from './table';

export const MainContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <CategoryProvider>
      <ProductProvider>
        <TableProvider>
          <OrderProvider>
            <AppProvider>{children}</AppProvider>
          </OrderProvider>
        </TableProvider>
      </ProductProvider>
    </CategoryProvider>
  );
};
