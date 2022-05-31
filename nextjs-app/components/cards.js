import SuperheroCard from './card';

export default function SuperheroCards({ cards }) {
  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
      {cards.map((card) => (
        <div className='col mt-4' key={card._id}>
          <SuperheroCard info={card}/>
        </div>
      ))}
    </div>
  );
}