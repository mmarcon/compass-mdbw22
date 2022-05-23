const falso = require('@ngneat/falso');
const users = [];
for (let i = 0; i < 10000; i++) {
  const firstName = falso.randFirstName({ withAccents: false });
  const lastName = falso.randLastName({ withAccents: false });
  users.push({
    firstName,
    lastName,
    avatar: falso.randAvatar(),
    email: falso.randEmail({firstName, lastName}),
    username: falso.randUserName({firstName, lastName}),
    country: falso.randCountryCode(),
    createdAt: falso.randBetweenDate({ from: new Date('11/02/2009'), to: new Date() })
  });
}
use('superheroes_game');
db.users.deleteMany({});
db.users.insertMany(users);