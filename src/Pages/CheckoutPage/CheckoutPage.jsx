import CheckoutItem from '@/components/CheckoutItem/CheckoutItem.jsx';
import CheckoutSummary from '@/components/CheckoutSummary/CheckoutSummary.jsx';
import { useCart } from '@/context/CartContext.jsx';

import style from './CheckoutPage.module.scss';

const CheckoutPage = () => {
  const { title, checkoutContainer, items, sectionTitle } = style;

  const { getCartItemsWithProducts, getCartTotal } = useCart();
  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal();

  return (
    <main>
      <div className="container">
        <h1 className={title}>Checkout</h1>
        <div className={checkoutContainer}>
          <div className={items}>
            <h2 className={sectionTitle}>Order Summary</h2>
            {cartItems.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </div>
          <CheckoutSummary total={total} />
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
