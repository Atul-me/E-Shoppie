"use client"
import React, { useEffect, useState } from 'react';
// import { getCategory } from '@/actions/get-category';
import FilteredProducts from './components/FilteredProducts'; // Import the FilteredProducts component
import useCart from '@/hooks/use-cart';
import Container from '@/components/ui/container';
import Summary from './summary';
import CartItem from './components/cart-item';

export const revalidate = 0;

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Define the category or fetch it based on your logic
  const categoryId = '8ac51026-95be-4507-b457-23f810a6a0e9'; // Example category ID

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))} 
              </ul>
            </div>
            <Summary />
          </div>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <FilteredProducts category={categoryId} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;


// "use client";

// import { useEffect, useState } from 'react';

// import Container from '@/components/ui/container';
// import useCart from '@/hooks/use-cart';

// import Summary from './summary'
// import CartItem from './components/cart-item';
// import FilteredProducts from './components/FilteredProducts';
// import ProductList from "@/components/product-list";
// // import ProductPage from './components/suggested-products';

// import { getCategory } from '@/actions/get-category';




// export const revalidate = 0;

// const CartPage = () => {
//   const [isMounted, setIsMounted] = useState(false);
//   const cart = useCart();

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div className="bg-white">
//       <Container>
//         <div className="px-4 py-16 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
//           <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
//             <div className="lg:col-span-7">
//               {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
//               <ul>
//                 {cart.items.map((item) => (
//                   <CartItem key={item.id} data={item} />
//                 ))} 
//               </ul>
//             </div>
//             <Summary />
//           </div>
//           {/* <ProductPage /> */}
//           <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
//           <FilteredProducts category={category}/>
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// };

// export default CartPage;
