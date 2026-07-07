import ProductCard from "./ProductCard";

const ProductGrid = ({ products, collection }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          collection={collection}
        />
      ))}
    </div>
  );
};

export default ProductGrid;