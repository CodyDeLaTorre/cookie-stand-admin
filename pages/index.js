import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import Footer from '../components/Footer';

export default function CookieStandAdmin() {
  const [locations, setLocations] = useState([]);

  function locationHandler(event) {
    event.preventDefault();
    const location = {
      name: event.target.location.value,
      minCustomers: parseInt(event.target.minCust.value),
      maxCustomers: parseInt(event.target.maxCust.value),
      avgCookies: parseFloat(event.target.avgSales.value),
      id: locations.length
    };
    setLocations([...locations, location]);
  };
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className=''>
        <CreateForm locationHandler={locationHandler}/>
        <ReportTable locations={locations}/>
      </main>
      <Footer locations={locations}/>
    </>
  );
}
