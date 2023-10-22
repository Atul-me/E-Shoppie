"use client";

import { useEffect, useState } from 'react';
import Container from '@/components/ui/container';
import useCart from '@/hooks/use-cart';
import Summary from './components/summary';
import CartItem from './components/cart-item';
import SuggestedProjects from '@/components/SuggestedProjects';

export const revalidate = 0;

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const [suggestedProjects, setSuggestedProjects] = useState([]);

  useEffect(() => {
    // Fetch suggested projects from your backend API
    // fetch(`http://localhost:3000/api/f0669d09-3535-471c-916b-b453fdb289ce/products/3e7d3d84-1944-46c6-9c31-d447a0874302`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data,"DATADATA")
    //     setSuggestedProjects(data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching suggested projects:', error);
    //   });

    
  }, []);
  async function fetchMoviesBadStatus() {
    const response = await fetch('http://localhost:3000/api/f0669d09-3535-471c-916b-b453fdb289ce/products/3e7d3d84-1944-46c6-9c31-d447a0874302');
  
    if (!response.ok) {

      console.log(response,"RESPONSE")
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    const movies = await response.json();
    return movies;
  }
  
  fetchMoviesBadStatus().catch(error => {
    
    error.message; // 'An error has occurred: 404'
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <p className="text-neutral-500">No items added to the cart.</p>}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
          <SuggestedProjects title="Also Buy" projects={suggestedProjects} />
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
