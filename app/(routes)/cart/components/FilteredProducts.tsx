import { Category, Product } from '@/types';
import { useFilteredProducts } from '@/hooks/useFilteredProducts';

interface FilteredProductsProps {
  category: Category;
}

const FilteredProducts: React.FC<FilteredProductsProps> = ({ category }) => {
  const filteredProducts = useFilteredProducts(category.id);

  return (
    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold">{category.name} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          // Render each product card here
          <div key={product.id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>Price: ${product.price}</p>
            {/* <p>Color: {product.color}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredProducts;
