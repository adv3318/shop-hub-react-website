import Products from '@/components/Products/Products.jsx';
import { getProducts } from '@/data/products.js';

import style from "./HomePage.module.scss";

const HomePage = () => {

  const {
    page,
    hero,
    title,
    subtitle,
    sectionTitle,
    grid,
  } = style

  const products = getProducts();

  return (
    <main className={page}>
      <div className={hero}>
        <h1 className={title}>Welcome to ShopHub</h1>
        <p className={subtitle}>Discover amazing products at great prices</p>
      </div>
      <div className="container">
        <h2 className={sectionTitle}>Our Products</h2>
        <div>
          <div className={grid}>
            {products.map((product) => (
              <Products key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;