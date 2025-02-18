import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test 1'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='Test 2'
          price={5}
          description='This is a the second product - amazing!'
        />
        <ProductItem
          title='Test 3'
          price={7}
          description='This is a the third product - amazing!'
        />
        <ProductItem
          title='Test 4'
          price={9}
          description='This is a fourth product - amazing!'
        />
        <ProductItem
          title='Test 5'
          price={4}
          description='This is a fifth product - amazing!'
        />
        <ProductItem
          title='Test 6'
          price={8}
          description='This is a sixth product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
