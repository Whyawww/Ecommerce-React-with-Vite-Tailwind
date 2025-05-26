import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md'; 
import { useCart } from '../CartContext/CartContext'; 
import { ALL_PRODUCTS_DATA } from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 

  const product = ALL_PRODUCTS_DATA.find((item) => item.id === Number(id)); 

  const [descIndex, setDescIndex] = React.useState(0);

  React.useEffect(() => {
    if (product) {
      setDescIndex(0); 
      const interval = setInterval(() => {
        setDescIndex((prevIndex) => {
          if (prevIndex < product.desc.length) {
            return prevIndex + 1;
          } else {
            clearInterval(interval);
            return prevIndex;
          }
        });
      }, 50); 
      return () => clearInterval(interval); 
    }
  }, [id, product]); 
  if (!product) {
    return <div className="p-10 text-center text-red-600">Produk tidak ditemukan.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product); 
    alert(`${product.title} telah ditambahkan ke keranjang!`); 
  };

  return (
    <div className="p-10 max-w-4xl mx-auto animate-fade-in animate-duration-1000">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-primary hover:bg-primary hover:text-white flex items-center gap-2 animate-bounce px-4 py-2 rounded-md transition-colors duration-300" 
      >
        <MdArrowBack className="text-xl" />
        Kembali
      </button>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center animate-fade-in animate-duration-100">
        <img
          src={product.img}
          alt={product.title}
          className="w-full md:w-1/2 rounded-lg object-cover animate-zoom-in animate-duration-200"
        />
        <div className="space-y-4 animate-fade-in animate-duration-1000">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.desc.substring(0, descIndex)}</p> 
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>{product.rating}</span>
          </div>
          <p className="text-lg">Warna: {product.color}</p>
          <p className="text-lg font-semibold text-green-600">
            Rp {product.price.toLocaleString('id-ID')}
          </p>
          <p className="text-sm text-gray-500">Stok: {product.stock}</p>
          <button 
            onClick={handleAddToCart} 
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300"
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
