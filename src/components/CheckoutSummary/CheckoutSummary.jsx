import Button from '@/components/ui/Button/Button.jsx';
import { useCart } from '@/context/CartContext.jsx';
import { formatPrice } from '@/utils/formatPrice.js';

import style from './CheckoutSummary.module.scss';

const CheckoutSummary = ({ total }) => {
  const { clearCart } = useCart();
  const {
    checkoutSummary,
    summaryTitle,
    summaryTotal,
    summaryLabel,
    summaryValue,
    summaryValueFinal,
  } = style;

  const placeOrder = () => {
    alert('Successful Order');
    clearCart();
  };

  return (
    <div className={checkoutSummary}>
      <h2 className={summaryTitle}>Total</h2>
      <div className={summaryTotal}>
        <p className={summaryLabel}>Subtotal:</p>
        <p className={summaryValue}>{formatPrice(total)}</p>
      </div>
      <div className={summaryTotal}>
        <p className={summaryLabel}>Total:</p>
        <p className={`${summaryValue} ${summaryValueFinal}`}>{formatPrice(total)}</p>
      </div>
      <Button className="btn-primary btn-large btn-block" onClick={placeOrder}>
        Place Order
      </Button>
    </div>
  );
};

export default CheckoutSummary;
