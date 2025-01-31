import React, { useState } from 'react';
import { Search, Lightbulb, Brain, Briefcase, Heart, Trophy, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CategoryCard from './components/CategoryCard';
import FeaturedSolution from './components/FeaturedSolution';
import Newsletter from './components/Newsletter';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: 'Daily Life Solutions',
      icon: <Lightbulb className="w-6 h-6" />,
      description: 'Tips and guides for improving everyday activities',
      color: 'bg-blue-500',
    },
    {
      title: 'Emotional & Mental Health',
      icon: <Brain className="w-6 h-6" />,
      description: 'Resources for managing stress and mental well-being',
      color: 'bg-purple-500',
    },
    {
      title: 'Work & Productivity',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'Solutions for staying productive and career advice',
      color: 'bg-green-500',
    },
    {
      title: 'Health & Wellness',
      icon: <Heart className="w-6 h-6" />,
      description: 'Guides on exercise, diet, and mindfulness',
      color: 'bg-red-500',
    },
    {
      title: 'Personal Development',
      icon: <Trophy className="w-6 h-6" />,
      description: 'Resources for skill-building and goal setting',
      color: 'bg-yellow-500',
    },
  ];

  const featuredSolutions = [
    {
      title: 'How to Build a Morning Routine That Works',
      category: 'Daily Life Solutions',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
      readTime: '5 min read',
    },
    {
      title: 'Managing Work-Life Balance While Working Remote',
      category: 'Work & Productivity',
      image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=800',
      readTime: '7 min read',
    },
    {
      title: '5 Simple Meditation Techniques for Beginners',
      category: 'Emotional & Mental Health',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=800',
      readTime: '4 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Solutions to Life's Daily Challenges
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover practical advice, expert tips, and resources to help you thrive every day
            </p>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Solutions by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Solutions</h2>
            <button className="text-blue-600 flex items-center hover:text-blue-700">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSolutions.map((solution) => (
              <FeaturedSolution key={solution.title} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

export default App;