import React from 'react';

interface FeaturedSolutionProps {
  title: string;
  category: string;
  image: string;
  readTime: string;
}

const FeaturedSolution: React.FC<FeaturedSolutionProps> = ({
  title,
  category,
  image,
  readTime,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-medium">{category}</span>
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <button className="mt-2 text-blue-600 font-medium hover:text-blue-700">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default FeaturedSolution;