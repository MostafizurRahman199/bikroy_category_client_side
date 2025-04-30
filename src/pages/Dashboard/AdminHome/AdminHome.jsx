import React from 'react';
import { useFirebaseAuth } from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import ApiComponent from '../../../API/ApiComponent';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { FaDollarSign, FaUserAlt, FaUtensils, FaShoppingCart, FaUsers } from "react-icons/fa";
import { Bar as BarChartJS, Pie } from 'react-chartjs-2'; // Renamed `Bar` to `BarChartJS` to avoid conflicts
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, Legend as RechartsLegend, Cell } from 'recharts';
import Loading from '../../../components/Loading/Loading';
import ErrorPage from '../../../components/Error.jsx/ErrorPage';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const AdminHome = () => {
  const { user } = useFirebaseAuth();
  const name = user?.displayName;
  const email = user?.email;
  const { adminStats } = ApiComponent();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminStats", email],
    queryFn: () => adminStats(email),
    enabled: !!email,
  });

  if (isLoading) {
    return <Loading height='screen'></Loading>;
  }

  if (isError) {
    return <ErrorPage></ErrorPage>;
  }

 

  const { paymentCount, userCount, menuCount,  revenue, categoryWiseCount, categoryWiseRevenue } = data || {};

  const revenueData2 = Object.keys(categoryWiseRevenue || {}).map((category) => ({
    category,
    totalRevenue: categoryWiseRevenue[category],
  }));



const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
  );
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  
  // Custom colors for each bar
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"]; // Example color set
  


  const categoryData = {
    labels: Object.keys(categoryWiseCount || {}),
    datasets: [
      {
        label: 'Category Wise Count',
        data: Object.values(categoryWiseCount || {}),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384'],
        borderWidth: 1,
      },
    ],
  };

  const revenueData = {
    labels: Object.keys(categoryWiseRevenue || {}),
    datasets: [
      {
        label: 'Category Wise Revenue ($)',
        data: Object.values(categoryWiseRevenue || {}),
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F9A3A4', '#FFC300', '#DAF7A6', '#C70039'],
        borderWidth: 1,
      },
    ],
  };

  const overallData = {
    labels: ['Payments', 'Users', 'Menu Items', 'Orders', 'Revenue'],
    datasets: [
      {
        label: 'Overall Stats',
        data: [paymentCount, userCount, menuCount,  revenue],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56',  '#9966FF'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="admin-home-container w-10/12 mx-auto">
      <SectionHeading title1={"---Admin Stats---"} title2={"---Summary of All---"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-blue-100 shadow-lg p-4 rounded-lg flex items-center space-x-4">
          <FaDollarSign className="text-blue-600 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Payments</h2>
            <p className="text-2xl font-bold text-center">{paymentCount}</p>
          </div>
        </div>

        <div className="card bg-green-100 shadow-lg p-4 rounded-lg flex items-center space-x-4">
          <FaUserAlt className="text-green-600 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-2xl font-bold text-center">{userCount}</p>
          </div>
        </div>

        <div className="card bg-yellow-100 shadow-lg p-4 rounded-lg flex items-center space-x-4">
          <FaUtensils className="text-yellow-600 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Menu Items</h2>
            <p className="text-2xl font-bold text-center">{menuCount}</p>
          </div>
        </div>

        <div className="card bg-red-100 shadow-lg p-4 rounded-lg flex items-center space-x-4">
          <FaShoppingCart className="text-red-600 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-2xl font-bold text-center">{paymentCount}</p>
          </div>
        </div>

        <div className="card bg-purple-100 shadow-lg p-4 rounded-lg flex items-center space-x-4">
          <FaUsers className="text-purple-600 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Revenue</h2>
            <p className="text-2xl font-bold text-center">${revenue.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className='grid border-2 grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center justify-items-center my-12'>
        <div className="mt-8  flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-center">Category Wise Item Count</h3>
          <Pie data={categoryData} />
        </div>

        <div className="mt-8 h-full w-full  flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-center">Category Wise Revenue</h3>
          <BarChartJS data={revenueData} />
        </div>

        <div className="mt-8 h-full w-full flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-center">Overall Stats Comparison</h3>
          <BarChartJS data={overallData} />
        </div>

        <div className="mt-8 flex flex-col justify-center items-center">
      <BarChart
        className="w-full h-full"
        width={400}
        height={400}
        data={revenueData2}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="category" />
        <YAxis />
        <RechartsTooltip />
        <RechartsLegend />
        <Bar dataKey="totalRevenue" shape={<TriangleBar />}>
          {revenueData2.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
      </div>
    </div>
  );
};

export default AdminHome;
