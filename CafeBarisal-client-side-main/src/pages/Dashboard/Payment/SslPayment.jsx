import React from 'react';
import { useFirebaseAuth } from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';
import axios from 'axios';

const SslPayment = () => {


  const {user} = useFirebaseAuth();
  const email = user?.email;
  const name = user?.displayName;
  console.log(email)
  const { data, totalPrice } = useCart();




  const handlePayment = async () => {


    
 
    const paymentData = {
      email : email,
      name : name,
      amount : totalPrice,
      paymentMethod : "SSL",
      date : new Date(), //utc date convert
      
      cartIds : data?.map((item)=>item._id),
      itemIds : data?.map((item)=>item.Item_id),
      status : "pending",
    }
    



    try {
      const response = await axios.post('https://cafebarisalserverside.vercel.app/create-ssl-payment', paymentData);

        console.log(response.data);
       const redirectURL = response.data?.redirectUrl;
       if(redirectURL){
         window.location.href = redirectURL;
       }
      } catch (error) {
      console.error('Payment creation failed:', error);
    }
  };



  return (
    <div className="p-6 rounded-2xl shadow-lg border border-gray-200 bg-white w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold text-center mb-4" style={{ color: '#d1a054' }}>
        SSL Payment
      </h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="text"
          id="email"
          value={email || 'not found'}
          readOnly
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d1a054]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
          Amount
        </label>
        <input
          type="text"
          id="amount"
          value={`$${totalPrice || 0}`}
          readOnly
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d1a054]"
        />
      </div>
      <button
        onClick={handlePayment}
        className="w-full py-2 px-4 bg-[#d1a054] text-white font-semibold rounded-lg shadow-md hover:bg-[#b58f45] transition-colors duration-300"
      >
        Create Payment
      </button>
    </div>
  );
};

export default SslPayment;
