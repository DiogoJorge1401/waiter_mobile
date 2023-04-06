const formatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export const formatCurrency = (price: number) => {
  return formatter.format(price);
};
