import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import axios from 'axios';

const Popup = ({ orderPopup, setOrderPopup, fetchProducts }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    type: '',
    color: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/order', formData);
      console.log('Order submitted:', response.data);
      setOrderPopup(false);
      fetchProducts(); // Refresh the products list
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-6 shadow-md rounded-md duration-200 w-[350px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-bold">Order Now</h1>
                <IoCloseOutline className="text-2xl cursor-pointer" onClick={() => setOrderPopup(false)} />
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                  <span className="block text-sm font-medium">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-full border bg-primary/70 text-black px-4 py-2 mb-2"
                  />
                </label>
                <label className="block mb-2">
                  <span className="block text-sm font-medium">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-full border bg-primary/70 text-black px-4 py-2 mb-2"
                  />
                </label>
                <label className="block mb-2">
                  <span className="block text-sm font-medium">Address</span>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-full border bg-primary/70 text-black px-4 py-2 mb-2"
                  />
                </label>
                <label className="block mb-2">
                  <span className="block text-sm font-medium">Type Handphone</span>
                  <input
                    type="text"
                    name="type"
                    placeholder="Type Handphone"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full rounded-full border bg-primary/70 text-black px-4 py-2 mb-2"
                  />
                </label>
                <label className="block mb-4">
                  <span className="block text-sm font-medium">Color</span>
                  <input
                    type="text"
                    name="color"
                    placeholder="Color"
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full rounded-full border bg-primary/70 text-black px-4 py-2"
                  />
                </label>
                <div className="flex justify-center">
                  <button type="submit" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 text-white py-2 px-6 rounded-full">
                    Order Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
