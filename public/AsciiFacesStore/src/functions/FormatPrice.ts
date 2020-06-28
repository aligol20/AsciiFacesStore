/**
 * Converts cents to dollars.
 * @param price
 */
const FormatPrice = (price: number) => {
  //Divides to 100 for finding the value as dollars.
  let test = price / 100;
  // With the help of js function, converts it to dollars.
  const dollars = test.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return dollars;
};
export default FormatPrice;
