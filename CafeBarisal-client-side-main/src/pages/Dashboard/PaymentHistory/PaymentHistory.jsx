import React from 'react'
import { useFirebaseAuth } from '../../../hooks/useAuth'
import { useQuery } from '@tanstack/react-query';
import ApiComponent from '../../../API/ApiComponent';
import { Link } from 'react-router-dom';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { FaShoppingCart } from 'react-icons/fa';

const PaymentHistory = () => {

const {user} = useFirebaseAuth();
const email = user?.email;
const {getPaymentHistory} = ApiComponent();

const { data:paymentData, isLoading, isError, refetch } = useQuery({
    queryKey: ['paymentHistory', email],
    queryFn: () => getPaymentHistory(email),
    enabled: !!email, // Prevent query from running if email is falsy
});

console.log(paymentData);

if (paymentData?.length === 0 || paymentData === false) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <FaShoppingCart className="text-gray-400 text-6xl mb-4" />
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            No Payment found
          </p>
          <Link to={"/order/:category"}
            className="mt-4 px-6 py-2 bg-[#009877] text-white rounded-lg shadow-md font-semibold hover:bg-[#b5853a] transition-all"
            onClick={() => console.log("Redirect to shop")}
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }



  return (
    <div className="w-full md:w-10/12 mx-auto  md:max-h-[calc(100vh-50px)]    p-6 ">
    {/* Header */}
    <SectionHeading title1={"---Your payment--"} title2={"Payment History"}></SectionHeading>
  <div className='bg-white shadow-lg rounded-lg p-6'>
   <div className="flex justify-between items-center border-b pb-4 mb-4">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Total Payment: {paymentData?.length}
        </h2>
        <h2 className="text-xl font-semibold text-gray-800">
          Total Amount: $
          {paymentData
            ?.reduce((total, item) => total + item.amount , 0)
            .toFixed(2)}
        </h2>
      </div>

    </div>

    {/* Table for medium and large devices */}
    <div className="hidden md:block overflow-x-auto   max-h-[calc(100vh-200px)] overflow-auto ">
      <table className="table-auto w-full text-left border-collapse ">
        <thead>
          <tr className="bg-[#009877] text-white font-normal">
           
            <th className="py-2 px-4 text-center">Date</th>
            <th className="py-2 px-4 text-center">Transaction Id</th>
            <th className="py-2 px-4 text-center">Status</th>
            <th className="py-2 px-4 text-center">Amount</th>
          </tr>
        </thead>
        <tbody className="">
          {paymentData?.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
            
              <td className="py-4 px-4 text-center">
                <div>
                    <p>{new Date(item.date).toLocaleDateString()}</p>
                    <p>{new Date(item.date).toLocaleTimeString()}</p>
                </div>
              </td>
              <td className="py-4 px-4 text-center">{item.transactionId}</td>
              <td className="py-4 px-4 text-center">{item.status}</td>
              <td className="py-4 px-4 text-center">{item.amount}</td>
              
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Card format for small devices */}
    <div className="block md:hidden">
      {paymentData?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-gray-100 p-4 mb-4 rounded-lg shadow-sm"
        >
          <div className="flex flex-col sm:flex sm:flex-row gap-4 items-center mb-4">
            
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600">Date: {new Date(item.date).toLocaleDateString()}</p>
              <p className="text-gray-600">TranID: {item.transactionId}</p>
            </div>
            <div className="text-right text-lg font-semibold text-gray-800">
              Amount: {item.amount}
            </div>
         
          </div>
        </div>
      ))}
    </div>
 </div>
  </div>
  )
}

export default PaymentHistory