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
        <div className='row row-cols-auto mt-5'>
          <div className='col-md-auto'>
            <h1>
              <a href='https://www.mongodb.com/products/compass'>Compass</a> gives you Query API superpowers 🦸🏼‍♀️
            </h1>

            <p className='lead'>
              Get started by editing <code>pages/index.js</code>.
            </p>
          </div>
        </div>

        <div className='row row-cols-4 row-cols-md-4 g-4'>
          <div className='col'>
            <div className='card h-100 border-primary'>
              <div className='card-header text-primary'>👩🏼‍💻 Workshop</div>
              <div className='card-body'>
                <h5 className='card-title'>Good 🦸🏻‍♂️ vs Evil 🦹🏻‍♂️</h5>
                <p className='card-text'>
                  Shows the result of an hypothetical battle
                  between good and evil.
                </p>
                <Link href='/good-vs-evil'>
                  <a className='btn btn-primary'>Go to the Good vs Evil match &rarr;</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card h-100 border-primary'>
              <div className='card-header text-primary'>👩🏼‍💻 Workshop</div>
              <div className='card-body'>
                <h5 className='card-title'>Leaderboard</h5>
                <p className='card-text'>
                  Shows the leadearboard for the Superheroes game.
                </p>
                <Link href='/leaderboard'>
                  <a className='btn btn-primary'>Go to the Leaderboard &rarr;</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card h-100 border-primary'>
              <div className='card-header text-primary'>👩🏼‍💻 Workshop</div>
              <div className='card-body'>
                <h5 className='card-title'>Leaderboard by country</h5>
                <p className='card-text'>
                  Shows the leadearboard by country for the Superheroes game.
                </p>
                <Link href='/leaderboard-by-country'>
                  <a className='btn btn-primary'>Go to the Leaderboard &rarr;</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card h-100 border-primary'>
              <div className='card-header text-primary'>👩🏼‍💻 Workshop</div>
              <div className='card-body'>
                <h5 className='card-title'>Superheroes Catalogue</h5>
                <p className='card-text'>
                  Show the entire catalogue of superheroes, with the possibility to lookup superheroes
                  by different criteria using <a href='https://www.mongodb.com/docs/atlas/atlas-search/'>Atlas Search</a>.
                </p>
                <Link href='/superheroes-catalogue'>
                  <a className='btn btn-primary'>Go to the catalogue &rarr;</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card border-info h-100'>
              <div className='card-header'>ℹ Resources</div>
              <div className='card-body'>
                <h5 className='card-title'>Compass Docs</h5>
                <p className='card-text'>If you are looking for how to do something in Compass, the online documentation is your best resource.</p>
                <a className='btn btn-info' href='https://www.mongodb.com/docs/compass/current/'>Go to the online docs &rarr;</a>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card border-info h-100'>
              <div className='card-header'>ℹ Resources</div>
              <div className='card-body'>
                <h5 className='card-title'>MongoDB Aggregations Docs</h5>
                <p className='card-text'>If you need to read the documentation for some of the aggregation framework stages and operators, check out the online manual.</p>
                <a className='btn btn-info' href='https://www.mongodb.com/docs/manual/reference/aggregation/'>Agg. Framework docs &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
