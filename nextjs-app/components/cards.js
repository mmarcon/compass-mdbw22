import SuperheroCard from './card';

export default function SuperheroCards({ cards }) {
  return (
    <div className='row row-cols-6 row-cols-md-6 g-4'>
      {cards.map((card) => (
        <div className='col-sm' key={card._id}>
          <SuperheroCard info={card}/>
        </div>
      ))}
    </div>
  );
}