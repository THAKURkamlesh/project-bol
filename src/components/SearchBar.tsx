import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-blue-100"
        placeholder="Search for solutions (e.g., 'time management', 'stress relief')"
      />
    </div>
  );
};

export default SearchBar;