import React, { useState } from "react";
import Payment from "./Payment";
import SslPayment from "./SslPayment";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { useFirebaseAuth } from "../../../hooks/useAuth";

const PaymentParent = () => {
  const [isSslPayment, setIsSslPayment] = useState(true);
  const {user} = useFirebaseAuth;
    console.log(user);

  return (
    <div className="h-fit w-full mx-auto flex flex-col items-center justify-center bg-gray-50 p-12">
      <div className="w-full  p-6  border-gray-200 bg-white">
      <SectionHeading title1={"---Safe Payment---"} title2={"Feel free to Pay"}></SectionHeading>
        <div className="flex justify-center mb-6 gap-4">
          <button
            onClick={() => setIsSslPayment(true)}
            className={`px-4 py-2 font-semibold rounded-lg shadow-md transition-colors duration-300 ${
              isSslPayment
                ? "bg-[#149777] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            SSL Payment
          </button>
          <button
            onClick={() => setIsSslPayment(false)}
            className={`px-4 py-2 font-semibold rounded-lg shadow-md transition-colors duration-300 ${
              !isSslPayment
                ? "bg-[#149777] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Stripe Payment
          </button>
        </div>

        <div className="mt-4">
          {isSslPayment ? <SslPayment /> : <Payment />}
        </div>
      </div>
    </div>
  );
};

export default PaymentParent;
