import { PriceValue } from "./price_styles";

const Price = ({ price }: { price: number }) => {
  return (
    <div>
      <span>Price</span>
      <PriceValue data-test-id="trip-card-price-value">{price}$</PriceValue>
    </div>
  );
};

export default Price;
