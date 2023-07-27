import { PriceValue } from "./price_styles";

export const Price = ({ price }: { price: number }) => {
  return (
    <div>
      <span>Price</span>
      <PriceValue data-test-id="trip-card-price-value">{price}$</PriceValue>
    </div>
  );
};
