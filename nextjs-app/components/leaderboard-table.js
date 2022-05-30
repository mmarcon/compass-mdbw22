function CountryCodeToFlag({ code }) {
  const codePoints = code
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Avatar({avatarUrl}) {
  return (<img src={avatarUrl} className='rounded-circle' alt='Avatar' />);
}

export default function LeaderboardTable({ data }) {
  return (
    <table class="table table-striped align-middle">
    <thead>
      <tr>
        <th scope="col">Rank</th>
        <th scope="col">Avatar</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Username</th>
        <th scope="col">Country</th>
        <th scope="col">Total Wins</th>
      </tr>
    </thead>
    <tbody>
      {data && data.map((item, index) => {
          return (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td><Avatar avatarUrl={item.avatar + '?' + item._id}/></td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.username}</td>
              <td><CountryCodeToFlag code={item.country}/></td>
              <td>{item.totalWins}</td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
  )
}