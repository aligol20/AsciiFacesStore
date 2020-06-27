const FormatPrice = (price: number) => {
  let test = price / 100;
  const dollars = test.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return dollars;
};
export default FormatPrice;
