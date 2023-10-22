// components/ui/suggested-project-card.tsx

import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/icon-button';
import useCart from '@/hooks/use-cart';
import { Product } from '@/types';

interface SuggestedProjectCardProps {
  data: Product;
  onPreview: MouseEventHandler<HTMLButtonElement>;
  onAddToCart: MouseEventHandler<HTMLButtonElement>;
  onClick: () => void;
}

const SuggestedProjectCard: React.FC<SuggestedProjectCardProps> = ({
  data,
  onPreview,
  onAddToCart,
  onClick,
}) => {
  const cart = useCart();

  return (
    <div onClick={onClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Review */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default SuggestedProjectCard;
