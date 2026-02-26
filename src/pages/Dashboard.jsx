import React, { useEffect, useState } from 'react'
import SectionTitle from '../components/molecules/SectionTitle'
import DashboardCards from '../components/molecules/DashboardCards'
import users from '../data/users.js'
import axios from 'axios'

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const stats = [
    {
      icon: 
        <path d="M10 13H8c-2.76 0-5 2.24-5 5v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5m-5 5c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3zm7.73-11.49c-.08-.22-.19-.42-.3-.62v-.01c-.69-1.14-1.93-1.89-3.42-1.89-2.28 0-4 1.72-4 4s1.72 4 4 4c1.49 0 2.73-.74 3.42-1.89v-.01c.12-.2.22-.4.3-.62.02-.06.03-.12.05-.18.06-.17.11-.34.15-.52.05-.25.07-.51.07-.78s-.03-.53-.07-.78c-.03-.18-.09-.35-.15-.52-.02-.06-.03-.12-.05-.18M9 10c-1.18 0-2-.82-2-2s.82-2 2-2 2 .82 2 2-.82 2-2 2m6 0q-.165 0-.33-.03c-.22.66-.56 1.27-.98 1.81.41.13.84.22 1.31.22 2.28 0 4-1.72 4-4s-1.72-4-4-4c-.47 0-.9.09-1.31.22.43.53.76 1.14.98 1.81.11-.01.21-.03.33-.03 1.18 0 2 .82 2 2s-.82 2-2 2m1 3h-1.11c.6.58 1.08 1.27 1.44 2.03C17.83 15.2 19 16.46 19 18h-2v1c0 .35-.07.69-.18 1H20c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5"></path>,
      color: "blue",
      title: "Total Users",
      quantity: users.length
    },
    {
      icon: 
        <path d="M21 6H7.05L5.94 2.68A1 1 0 0 0 4.99 2h-3v2h2.28l3.54 10.63A2 2 0 0 0 9.71 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35c.11-.31.07-.65-.11-.92A1 1 0 0 0 21 6m-3.69 8H9.72l-2-6h11.84zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path>,
      color: "green",
      title: "Total Orders",
      quantity: 512
    },
    {
      icon: 
        <path d="M3 16c0 .34.18.67.47.85l8 5a1.01 1.01 0 0 0 1.06 0l8-5c.29-.18.47-.5.47-.85V8c0-.34-.18-.67-.47-.85l-8-5c-.32-.2-.74-.2-1.06 0l-8 5c-.29.18-.47.5-.47.85zm2-6.53 6 3.6v6.13l-6-3.75zm8 9.73v-6.13l6-3.6v5.98zM12 4.18l5.84 3.65-5.84 3.5-5.84-3.5z"></path>,
      color: "purple",
      title: "Total Products",
      quantity: data.length
    },
  ]

  useEffect(() => {
    axios.get('https://699fde8d3188b0b1d536fff8.mockapi.io/api/v1/courses')
    .then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.log("error", error);
    }).finally(() => {
      setLoading(false);
    })
  }, []);

  return (
    <section className='px-4 md:ml-72'>
      <div className='py-4 my-2'>
        <SectionTitle heading="3" title="Dashboard" type="contents" fontSize="text-2xl" desc="Selamat datang kembali!" descFontWeight="normal" />
      </div>
      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {stats.map((item) => (
          <DashboardCards icon={item.icon} title={item.title} key={item.title} quantity={loading ? '...' : item.quantity} color={item.color} />
        ))}
      </div>
    </section>
  )
}

export default Dashboard