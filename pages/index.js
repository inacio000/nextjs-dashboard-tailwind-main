import Head from 'next/head';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';
import LineChart from '@/components/LineChart';
import PieChart from '@/components/PieChart';
import ScatterChart from '@/components/ScatterChart';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-2 grid-cols-1 gap-4'>
          <div className='flex flex-col gap-4'>
            <BarChart />
            <LineChart />
            <PieChart />
            <ScatterChart />
          </div>
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
