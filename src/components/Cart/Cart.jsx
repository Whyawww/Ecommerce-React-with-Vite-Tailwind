import React from 'react';
import { useCart } from '../CartContext/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Keranjang Belanja</h2>
        <p>Keranjang Anda masih kosong. Ayo mulai belanja!</p>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Keranjang Belanja Anda</h2>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4 last:border-b-0">
            <img src={item.img} alt={item.title} className="w-28 h-28 object-cover rounded-lg shadow-md" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-lg text-gray-700">Rp {item.price.toLocaleString('id-ID')}</p>
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50"
                  disabled={item.quantity <= 1} 
                >
                  -
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                  Hapus
                </button>
              </div>
            </div>
            <div className="text-lg font-semibold text-gray-800 mt-2 sm:mt-0">
              Subtotal: Rp {(item.price * item.quantity).toLocaleString('id-ID')}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right text-2xl font-bold text-gray-900 border-t pt-4">
        Total Belanja: Rp {getTotal().toLocaleString('id-ID')}
      </div>
      <div className="flex justify-end mt-6">
        <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors duration-300 text-lg font-semibold shadow-md">
          Lanjutkan ke Pembayaran
        </button>
      </div>
    </div>
  );
};

export default Cart;
