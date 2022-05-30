import Head from 'next/head';
import { useState, useEffect } from 'react';
import SuperheroCards from '../components/cards';

function Team({team}) {
    return (
      <div className='mt-5'>
        <h4><span className='text-muted'>Team:</span> {team._id}</h4>
        <h5><span className='text-muted'>Score:</span> {team.score}</h5>
        <SuperheroCards cards={team.cards} />
      </div>
    );
}

export default function GoodVsEvil() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://us-east-1.aws.data.mongodb-api.com/app/application-0-ltahx/endpoint/good_vs_bad')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
  }, []);

  return (
    <div className='container'>
      <Head>
        <title>Superheroes game | Good 🦸🏻‍♂️ vs Evil 🦹🏻‍♂️</title>
      </Head>

      <main>
        <div className='row row-cols-auto mt-5'>
          <div className='col-md-auto'>
            <h1>
              Good 🦸🏻‍♂️ vs Evil 🦹🏻‍♂️
            </h1>
            <p className='lead'>
              Edit <code>pages/good-vs-evil.js</code>
            </p>
          </div>
        </div>

        {
        isLoading ?
          <p className='row row-cols-auto mt-5'>Loading cards...</p> : 
          data && <div>
            <Team team={data[0]} />
            <Team team={data[1]} />
          </div>
        }
      </main>
    </div>
  );
}
