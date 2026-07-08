// import ProductCard from "./ProductCard";

// const ProductGrid = ({ products, collection }) => {
//   return (
//     <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           collection={collection}
          
//         />
//       ))}
//     </div>
//   );
// };

// export default ProductGrid;
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, collection, badgeLabel }) => {
  return (
    <section className="w-full">
      <div
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          sm:gap-5
          md:grid-cols-3
          md:gap-6
          lg:grid-cols-4
          lg:gap-8
          xl:gap-10
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            collection={collection}
            badgeLabel={badgeLabel}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;