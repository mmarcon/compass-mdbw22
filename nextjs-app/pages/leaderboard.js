import Head from 'next/head';
import { useState, useEffect } from 'react';
import LeaderboardTable from '../components/leaderboard-table';

export default function Leaderboard() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://us-east-1.aws.data.mongodb-api.com/app/application-0-ltahx/endpoint/leaderboard')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, []);

  return (
    <div className='container'>
      <Head>
        <title>Superheroes game | Leaderboard</title>
      </Head>

      <main>
        <div className='row row-cols-auto justify-content-md-center mt-5'>
          <div className='col-md-auto'>
            <h1>
              Game Leaderboard
            </h1>
            <p className='lead'>
              Edit <code>pages/leaderboard.js</code>
            </p>
          </div>
        </div>
        <div className='row row-cols-auto justify-content-md-center mt-5'>
          {isLoading ? <p>Loading leaderboard...</p> : <LeaderboardTable data={data} />}
        </div>
      </main>
    </div>
  );
}
