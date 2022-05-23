# Data Generation Information

The data for the Compass Superheroes online game is generated with the scripts and from the `superheroes.json` file contained in this folder.

 * `superheroes.json` was extracted from [akabab/superhero-api](https://github.com/akabab/superhero-api).
 * `generate-users.js`: generates random users for the game.
 * `generate-games.js`: is a pretty sophisticated script that runs a very simple game simulation for a given number of games and stores the outcome of each game into MongoDB. Since each game samples users and cards from the respective collections, simulating a high number of games might take a long time.

