use('superheroes_game');

const NUMBER_OF_GAMES = 100000;

function getRandomNumberSequence(min, max) {
  const sequence = [];
  for (let i = min; i <= max; i++) {
    sequence.push(i);
  }
  return sequence.sort(() => Math.random() - 0.5);  
}

function calculateWinningCard(card1, card2) {
  let card1Points = 0;
  let card2Points = 0;
  const powerstats = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];
  powerstats.forEach((powerstat) => {
    if (card1.powerstats[powerstat] > card2.powerstats[powerstat]) {
      card1Points++;
    } else {
      card2Points++;
    }
  });
  if (card1Points === card2Points) {
    return 0;
  } else if (card1Points > card2Points) {
    return -1;
  } else {
    return 1;
  }
}

function generateGame() {
  const [user1, user2] = db.users.aggregate({$sample: {size: 2}}).toArray();
  const cards = db.superheroes.aggregate([
    {$sample: {size: 6}},
    {$project: {
      _id: 1,
      name: 1,
      powerstats: 1,
      images: 1,
      slug: 1
    }}
  ]).toArray();


  const user1cards = cards.slice(0, 3);
  const user2cards = cards.slice(3, 6);

  const user1Sequence = getRandomNumberSequence(0, user1cards.length - 1);
  const user2Sequence = getRandomNumberSequence(0, user2cards.length - 1);

  const rounds = [];

  for (let i = 0; i < user1cards.length; i++) {
    const winningCard = calculateWinningCard(user1cards[user1Sequence[i]], user2cards[user2Sequence[i]]);
    rounds.push(
      {
        user1: {
          id: user1._id,
          card: user1Sequence[i]
        },
        user2: {
          id: user2._id,
          card: user2Sequence[i]
        },
        winner: winningCard === 0 ? null : winningCard === -1 ? user1._id : user2._id
      }
    )
  }

  const game = {
    players: [
      {
        user: user1,
        cards: user1cards
      },
      {
        user: user2,
        cards: user2cards
      }
    ],
    rounds
  };

  return game;
}
console.log('Generating games...');
const games = [...Array(NUMBER_OF_GAMES).keys()].map(() => {const game = generateGame(); process.stdout.write('.'); return game;});
console.log('\nInserting games into MongoDB...');
db.games.insertMany(games);
console.log('Done!');