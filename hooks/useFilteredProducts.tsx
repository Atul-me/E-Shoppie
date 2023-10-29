import { useEffect, useState } from 'react';
import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products';
import { Product } from '@/types';
// import getCategories from '@/actions/get-categories';

export function useFilteredProducts(categoryId: string) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
      
      
    const fetchFilteredProducts = async () => {
      try {
        // Fetch the category using the provided categoryId
        const category = await getCategory(categoryId);

        if (category) {
          // Fetch products based on the same category
          const products = await getProducts({
            
            categoryId: categoryId,
          });
          console.log(categoryId,"CatID")

          setFilteredProducts(products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchFilteredProducts();
  }, [categoryId]);
   
  return filteredProducts;
}
