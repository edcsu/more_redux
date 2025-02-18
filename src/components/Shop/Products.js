import ProductItem from './ProductItem';
import classes from './Products.module.css';

const productList = [
  {
    id: '9232b5f8-da4a-4fc7-9b1e-abaa84a82fda',
    title :'Test 1',
    price : 6,
    description: 'This is a first product - amazing!' 
  },
  {
    id: '757110fe-9f65-41db-8cfe-670f26031250',
    title :'Test 2',
    price : 8,
    description: 'This is a second product - amazing!' 
  },
  {
    id: '0bed73a0-4a75-4052-a058-786d426b558a',
    title :'Test 3',
    price : 5,
    description: 'This is a third product - amazing!' 
  },
  {
    id: 'e327dd68-761d-4ccd-8aba-88c43e1f145b',
    title :'Test 4',
    price : 9,
    description: 'This is a fourth product - amazing!' 
  },
  {
    id: '88570375-91d9-4b2d-a64c-46695cd616de',
    title :'Test 5',
    price : 4,
    description: 'This is a fifth product - amazing!' 
  },
  {
    id: '7822c86e-dc3c-49ff-8db5-086253e6069e',
    title :'Test 6',
    price : 7,
    description: 'This is a sixth product - amazing!' 
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
