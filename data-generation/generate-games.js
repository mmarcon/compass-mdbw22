const falso = require('@ngneat/falso');
use('superheroes_game');

const DEFAULT_NUMBER_OF_GAMES = 1000;
const DEBUG = false;

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
    } else if (card1.powerstats[powerstat] < card2.powerstats[powerstat]) {
      card2Points++;
    }
    DEBUG && console.log(powerstat, card1.powerstats[powerstat], card2.powerstats[powerstat], card1Points, card2Points);
  });
  if (card1Points === card2Points) {
    DEBUG && console.log('tie');
    return 0;
  } else if (card1Points > card2Points) {
    DEBUG && console.log('user1 wins');
    return -1;
  } else {
    DEBUG && console.log('user2 wins');
    return 1;
  }
}

function generateGame() {
  const [user1, user2] = db.users.aggregate({$sample: {size: 2}}).toArray();
  const cards = db.superheroes_cards.aggregate([
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

  DEBUG && console.log('sequences', user1Sequence, user2Sequence);

  const rounds = [];
  let user1Points = 0, user2points = 0;

  for (let i = 0; i < user1cards.length; i++) {
    const winningCard = calculateWinningCard(user1cards[user1Sequence[i]], user2cards[user2Sequence[i]]);
    user1Points += winningCard === -1 ? 1 : 0;
    user2points += winningCard === 1 ? 1 : 0;
    rounds.push(
      {
        user1: {
          id: user1._id,
          card: user1cards[user1Sequence[i]]
        },
        user2: {
          id: user2._id,
          card: user2cards[user2Sequence[i]]
        },
        winner: winningCard === 0 ? null : winningCard === -1 ? user1._id : user2._id
      }
    )
  }

  const game = {
    players: [
      {
        user: {_id: user1._id, username: user1.username, avatar: user1.avatar},
        cards: user1cards
      },
      {
        user: {_id: user2._id, username: user2.username, avatar: user2.avatar},
        cards: user2cards
      }
    ],
    rounds,
    winner: user1Points === user2points ? null : user1Points > user2points ? user1._id : user2._id,
    createdAt: falso.randBetweenDate({ from: new Date('11/02/2009'), to: new Date() }),
    v: 2
  };

  return game;
}

function generateGames(numberOfGames = DEFAULT_NUMBER_OF_GAMES) {
  console.log('Generating games...');
  const games = [...Array(numberOfGames).keys()].map(() => {const game = generateGame(); process.stdout.write('.'); return game;});
  console.log('\nInserting games into MongoDB...');
  db.games.insertMany(games);
  console.log('Done!');
}
