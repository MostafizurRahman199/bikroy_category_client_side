


import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import pizza from "../../../../public/menu/pizza-bg.jpg"
import dessert from "../../../../public/menu/dessert-bg.jpeg"
import soup from "../../../../public/menu/soup-bg.jpg"
import { useDarkMode } from "../../../Context/DarkModeContext";
import useMenu from "../../../hooks/useMenu";
import Loading from "../../Loading/Loading";
import ErrorPage from "../../../pages/ErrorPage";
import OrderCard from "../../../pages/Order/OrderCard";

const CardRecomends = () => {

  const {darkMode} = useDarkMode();
  const {menuData, isLoading, isError, error} = useMenu();
  const offeredItems = menuData?.filter((item)=>item?.category === "offered");
  const recommendedItems = menuData?.filter((item)=>item?.category === "popular");

if(isLoading) return <Loading></Loading>
if(isError) return <ErrorPage></ErrorPage>

  return (
    <div className={`w-10/12 mx-auto my-20`}>
      <SectionHeading title1={"---Should Try---"} title2={"CHEF RECOMMENDS"}></SectionHeading>
      <div className="">
      
          <OrderCard foodData={recommendedItems}></OrderCard>
     
      </div>
    </div>
  );
};

export default CardRecomends;
