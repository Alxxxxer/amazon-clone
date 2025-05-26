// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl shadow-md p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold mt-1">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
