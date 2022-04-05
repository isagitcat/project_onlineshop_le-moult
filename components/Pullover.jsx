import ProductInterface from './ProductInterface';

export default function Pullover({ products }) {
  return (
    <section className="image-section">
      <div className="products-headline">Pullover</div>
      <div className="products-images">
        {products.filter((searchfor) => searchfor.produktgruppe === 'Pullover').map(({ id, title, image, price }) => (
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