import Button from '@/components/ui/Button/Button.jsx';
import { useCart } from '@/context/CartContext.jsx';
import { formatPrice } from '@/utils/formatPrice.js';

import style from './Products.module.scss';

const Products = (props) => {
  const { productCard, productImg, productContent, productName, productPrice, productActions } =
    style;

  const { name, price, image, id } = props.product;

  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === id);

  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : '';

  return (
    <article className={productCard}>
      <img className={productImg} src={image} alt={name} />
      <div className={productContent}>
        <h3 className={productName}>{name}</h3>
        <p className={productPrice}>{formatPrice(price)}</p>
        <div className={productActions}>
          <Button href={`/products/${id}`} className="btn-primary">
            View Details
          </Button>
          <Button className="btn btn-secondary" onClick={() => addToCart(id)}>
            Add to Cart {productQuantityLabel}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Products;
