import Button from '@/components/ui/Button/Button.jsx';

import style from './Products.module.scss';

const Products = (props) => {

  const {
    productCard,
    productImg,
    productContent,
    productName,
    productPrice,
    productActions
  } = style;

  const {
    name,
    price,
    image,
    id,
  } = props.product;

  return (
    <article className={productCard}>
      <img className={productImg} src={image} alt={name} />
      <div className={productContent}>
        <h3 className={productName}>{name}</h3>
        <p className={productPrice}>{price}</p>
        <div className={productActions}>
          <Button href={`/products/${id}`} className="btn-primary">
            Vew Details
          </Button>
          <Button className="btn btn-secondary">Add to Cart</Button>
        </div>
      </div>
    </article>
  );
};

export default Products;