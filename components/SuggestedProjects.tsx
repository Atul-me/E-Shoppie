import React from 'react';
import ProductCard from '@/components/ui/product-card';
import { Product } from '@/types';
import NoResults from '@/components/ui/no-results';

interface SuggestedProjectsProps {
  title: string;
  projects: Product[]; // Assuming your suggested projects have a structure similar to 'Product'
}

const SuggestedProjects: React.FC<SuggestedProjectsProps> = ({ title, projects }) => {
  return (
    <div className="space-y-4">
      {title && <h3 className="font-bold text-3xl">{title}</h3>}
      {projects.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProductCard key={project.id} data={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SuggestedProjects;
