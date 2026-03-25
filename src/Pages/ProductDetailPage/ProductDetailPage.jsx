import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '@/components/ui/Button/Button.jsx';
import { getProductById } from '@/data/products.js';

import style from './ProductDetailPage.module.scss';

const ProductDetailPage = () => {
  const { productDetail, image, content, title, price, description } = style;

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate('*');
      return;
    }

    setProduct(foundProduct);
  }, [id, navigate]);

  if (!product) {
    return <h1>loading...</h1>;
  }

  return (
    <nav>
      <div className="container">
        <div className={productDetail}>
          <div className={image}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={content}>
            <h1 className={title}>{product.name}</h1>
            <p className={price}>${product.price}</p>
            <p className={description}>{product.description}</p>
            <Button className={'btn-primary'}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProductDetailPage;
