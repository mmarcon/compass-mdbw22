import Head from 'next/head';
import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div className='container'>
      <Head>
        <title>Superheroes game | 404</title>
      </Head>

      <main>
        <div className='row row-cols-auto mt-5'>
          <div className='col-md-auto'>
            <h1>
              404 👷🏻‍♀️ – Looks like this page has not been built yet.
            </h1>
            <p className='lead'>
              Create a new page in the <code>pages</code> directory and start building it!
            </p>
            <Link href="/">
              <a className='btn btn-primary'>
                Go back home
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}