import ProductInterface from './ProductInterface';

export default function Blusen({ products }) {
  return (
    <section className="image-section">
      <div className="products-headline">Blusen</div>
      <div className="products-images">
        {products.filter((searchfor) => searchfor.produktgruppe === 'Blusen').map(({ id, title, image, price }) => (
          <ProductInterface
            key={id}
            title={title}
            image={image}
            price={price}
            alt={title}
          />
        ))}
      </div>
    </section>
  );
};