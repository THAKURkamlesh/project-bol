import React from 'react';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, description, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className={`${color} p-6 flex items-center justify-center text-white`}>
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
          Explore Solutions →
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;