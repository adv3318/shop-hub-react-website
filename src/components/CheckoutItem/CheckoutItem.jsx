import Button from '@/components/ui/Button/Button.jsx';
import { useCart } from '@/context/CartContext.jsx';
import { formatPrice } from '@/utils/formatPrice.js';

import style from './CheckoutItem.module.scss';

const CheckoutItem = ({ item }) => {
  const { updateQuantity, removeFormCart } = useCart();
  const {
    checkoutItem,
    itemImage,
    itemDetails,
    itemName,
    itemPrice,
    itemControls,
    quantityControls,
    quantityValue,
    itemTotal,
  } = style;

  return (
    <div className={checkoutItem}>
      <img src={item.product.image} alt={item.product.name} className={itemImage} />
      <div className={itemDetails}>
        <h3 className={itemName}>{item.product.name}</h3>
        <p className={itemPrice}>{formatPrice(item.product.price)} each</p>
      </div>
      <div className={itemControls}>
        <div className={quantityControls}>
          <Button
            className={'quantity-btn'}
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <span className={quantityValue}>{item.quantity}</span>
          <Button
            className={'quantity-btn'}
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <p className={itemTotal}>{formatPrice(item.product.price * item.quantity)}</p>
        <Button className={'btn-secondary btn-small'} onClick={() => removeFormCart(item.id)}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CheckoutItem;
