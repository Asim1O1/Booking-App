import React from "react";

const hotels = [
  {
    id: 1,
    name: "The Grand Hotel",
    location: "New York, USA",
    description: "A luxurious experience with world-class amenities.",
    price: "$250/night",
    image: "https://example.com/hotel1.jpg",
  },
  {
    id: 2,
    name: "Seaside Resort",
    location: "Miami, USA",
    description: "Enjoy the beachside vibes with all-inclusive services.",
    price: "$300/night",
    image: "https://example.com/hotel2.jpg",
  },
  {
    id: 3,
    name: "Mountain Retreat",
    location: "Denver, USA",
    description: "A peaceful escape in the mountains with stunning views.",
    price: "$200/night",
    image: "https://example.com/hotel3.jpg",
  },
];

const HotelList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Hotel Listings</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {hotel.name}
              </h2>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="mt-2 text-gray-700">{hotel.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-green-500">
                  {hotel.price}
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
