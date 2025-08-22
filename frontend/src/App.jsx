import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaSearch, FaUser, FaHeart, FaShare, FaEye } from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample trending artworks data
  const trendingArtworks = [
    {
      id: 1,
      title: "Starry Night Dreams",
      artist: "Vincent van Gogh",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=600&fit=crop",
      likes: 1247,
      views: 8923,
      category: "Oil Painting"
    },
    {
      id: 2,
      title: "Abstract Harmony",
      artist: "Pablo Picasso",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500&h=600&fit=crop",
      likes: 2156,
      views: 15678,
      category: "Abstract"
    },
    {
      id: 3,
      title: "Renaissance Beauty",
      artist: "Leonardo da Vinci",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      likes: 3421,
      views: 23456,
      category: "Classical"
    },
    {
      id: 4,
      title: "Modern Expression",
      artist: "Salvador Dali",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      likes: 1892,
      views: 12345,
      category: "Surrealism"
    },
    {
      id: 5,
      title: "Digital Dreams",
      artist: "Contemporary Artist",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500&h=600&fit=crop",
      likes: 987,
      views: 8765,
      category: "Digital Art"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-bold">A</span>
                  </div>
                  <span className="ml-3 text-2xl font-bold text-gray-900">ArtCulture</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search artworks, artists, or styles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all duration-200"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </form>
            </div>

            {/* Profile Button */}
            <div className="flex items-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center space-x-2">
                <FaUser className="h-4 w-4" />
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Discover Amazing
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Artworks</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the world's finest collection of contemporary and classical art. 
            From masterpieces to emerging artists, find your next inspiration.
          </p>
        </div>

        {/* Trending Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <MdTrendingUp className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">Trending Artworks</h2>
            </div>
            <div className="flex space-x-2">
              <button className="swiper-button-prev-custom bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="swiper-button-next-custom bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Artworks Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="artworks-swiper"
          >
            {trendingArtworks.map((artwork) => (
              <SwiperSlide key={artwork.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200">
                        <FaHeart className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {artwork.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{artwork.title}</h3>
                    <p className="text-gray-600 mb-3">by {artwork.artist}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <FaHeart className="h-3 w-3 text-red-500" />
                          <span>{artwork.likes}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <FaEye className="h-3 w-3 text-blue-500" />
                          <span>{artwork.views}</span>
                        </span>
                      </div>
                      <button className="text-purple-600 hover:text-purple-700 transition-colors duration-200">
                        <FaShare className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore More?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of art enthusiasts discovering amazing artworks every day.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Browse All Artworks
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
