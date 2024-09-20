import React from "react";
import NavBar from "../components/navbar";
import Button from "../components/button";

const HomePage = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <div className="pt-36 ml-16 md:ml-24 lg:ml-32">
        <h1 className="text-5xl font-bold text-gray-800">
          A Lifetime of Discounts
        </h1>
        <p className="pt-6 text-lg text-gray-600 max-w-2xl">
          Get rewarded for your travels—unlock instant savings of 10% or more
          with a free BookMe account.
        </p>
        <Button className="mt-4" />
      </div>

      {/* Features Section */}
      <div className="mt-16 ml-16 md:ml-24 lg:ml-32">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">
              Exclusive Offers
            </h3>
            <p className="mt-4 text-gray-600">
              Get access to exclusive deals that you won't find anywhere else.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">
              24/7 Support
            </h3>
            <p className="mt-4 text-gray-600">
              Our support team is available anytime, anywhere to assist you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">
              Flexible Payment
            </h3>
            <p className="mt-4 text-gray-600">
              Choose from various payment options that suit your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-16 ml-16 md:ml-24 lg:ml-32 max-w-5xl">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Travel Destination"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gray-800 text-white py-8">
        <div className="ml-16 md:ml-24 lg:ml-32 max-w-5xl">
          <p>&copy; 2024 BookMe. All rights reserved.</p>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
