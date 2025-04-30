import React from 'react'
import BannerNew from '../../components/Home/BannerNew'
import CategorySwiper from '../../components/Home/CategorySwiper/CategorySwiper'
import BistroBoss from '../../components/Home/Bistro_Boss/BistroBoss'
import Menu from '../../components/Home/Menu/Menu'
import Contact from '../../components/Home/Contact/Contact'
import CardRecomends from '../../components/Home/CardRecomends/CardRecomends'
import FromOurMenu from '../../components/Home/FromOurMenu/FromOurMenu'
import TestimonialSlider from '../../components/Home/TestimonialSlider/TestimonialSlider'

import image1 from "../../../public/menu/dessert-bg.jpeg"
import image2 from "../../../public/menu/pizza-bg.jpg"
import image3 from "../../../public/menu/salad-bg.jpg"
import image4 from "../../../public/menu/soup-bg.jpg"


const Home = () => {


  const menuItems = [
    { name: "Roast Duck Breast", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce", image:  image1 },
    { name: "Escalope De Veau", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce", image: image2 },
    { name: "Fish Parmentier", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce", image:image3 },
    { name: "Tuna Niçoise", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce" , image:image4},
    { name: "Chicken and Walnut Salad", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",  image:"https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2021/12/apple-walnut-chicken-salad-square-1200.jpg" },
    { name: "Roasted Pork Belly", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"  , image:"https://images.food52.com/ns_hkPa58zLsuQ2-5njCNzZn6D8=/2016x1344/filters:format(webp)/98392a3e-2859-47fb-be03-a6c4bf70c4be--Roasted_Pork_Belly.jpg"},
  ];

  return (
    <div  className='min-h-screen'>
       <BannerNew></BannerNew>
       <div className='h-[200px]'> 
       </div>

       <CategorySwiper></CategorySwiper>
       <BistroBoss></BistroBoss>
       <Menu ></Menu>
       <Contact></Contact>
       <CardRecomends></CardRecomends>
       <FromOurMenu></FromOurMenu>
       <TestimonialSlider></TestimonialSlider>
    </div>
  )
}

export default Home