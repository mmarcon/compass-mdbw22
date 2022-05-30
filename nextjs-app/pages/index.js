import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Query API superpowers with Compass</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='row row-cols-auto justify-content-md-center mt-5'>
          <div className='col-md-auto'>
            <h1>
              <a href='https://www.mongodb.com/products/compass'>Compass</a> gives you Query API superpowers 🦸🏼‍♀️
            </h1>

            <p className='lead'>
              Get started by editing <code>pages/index.js</code>
            </p>
          </div>
        </div>

        <div className='row row-cols-auto justify-content-md-center mt-5'>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Compass Docs</h5>
                <p className='card-text'><a href='https://www.mongodb.com/docs/compass/current/'>Useful information on how to use Compass</a>.</p>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>MongoDB Aggregations Docs</h5>
                <p className='card-text'><a href='https://www.mongodb.com/docs/manual/reference/aggregation/'>Documentation for the aggregation framework</a>.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='row row-cols-auto justify-content-md-center mt-5'>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Leaderboard</h5>
                <p className='card-text'>
                  <Link href="/leaderboard">
                    <a>Go to the Leaderboard</a>
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
      .card {
        width: 18rem;
      }
    `}</style>
    </div>
  )
}
