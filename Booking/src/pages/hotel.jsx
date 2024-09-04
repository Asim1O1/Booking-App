import React from "react";
import Button from "../components/button";

const HotelPage = () => {
  // Sample hotel data
  const hotels = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      location: "New York, USA",
      price: "$200/night",
      rating: 4.5,
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      id: 2,
      name: "Ocean View Resort",
      location: "Malibu, USA",
      price: "$350/night",
      rating: 4.7,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Mountain Retreat",
      location: "Aspen, USA",
      price: "$180/night",
      rating: 4.3,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Hotel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="text-gray-800 font-bold">{hotel.price}</p>
              <p className="text-yellow-500">
                Rating: {hotel.rating} / 5
              </p>
              <Button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelPage;
