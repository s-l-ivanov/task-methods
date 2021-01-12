/**
 * Gross to net price calculator
 * @param { number } - grossPrice
 * @param { number } - the vat rate in percentage
 * @returns { number } - the result of the function
 */
const grossToNet = (grossPrice, vatRate = 20) => {
  const netPrice = grossPrice / (1 + (vatRate / 100));

  return netPrice;
};

const price = 50;
const VAT = 20;

console.log(grossToNet(price, VAT));
