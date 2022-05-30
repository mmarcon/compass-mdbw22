
export default function SuperheroCard({ info }) {
  return (
    <div className='col'>
      <div className='card h-100'>
        <img src={info.images.md} className='card-img-top'></img>
        <div className='card-body'>
          <div className='card-title'>
            {info.name}
          </div>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item small'><span className='text-muted'>Intelligence:</span> {info.powerstats.intelligence}</li>
          <li className='list-group-item small'><span className='text-muted'>Strength:</span> {info.powerstats.strength}</li>
          <li className='list-group-item small'><span className='text-muted'>Speed:</span> {info.powerstats.speed}</li>
          <li className='list-group-item small'><span className='text-muted'>Durability:</span> {info.powerstats.durability}</li>
          <li className='list-group-item small'><span className='text-muted'>Power:</span> {info.powerstats.power}</li>
          <li className='list-group-item small'><span className='text-muted'>Combat:</span> {info.powerstats.combat}</li>
        </ul>
        <div class='card-footer'>
          <small class='small'>{info.biography.publisher || 'Unknown'}</small>
        </div>
      </div>
    </div>
  );
}