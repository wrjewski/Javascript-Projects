const team = {
  _players: [
    {firstName: 'pete', lastName: 'Wheeler', age: 54},
    {firstName: 'Ray', lastName: 'Ski', age: 27},
    {firstName: 'Mack', lastName: 'Aglo', age: 33}
  ],
  _games: [
    {opponent: 'Black hawks', teamPoints: 7, opponentPoints: 3},
    {opponent: 'Eagles', teamPoints: 1, opponentPoints: 0},
    {opponent: 'Razors', teamPoints: 2, opponentPoints: 4}
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  //function to add new players
  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },

  //function to add new games
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teampoints: newTeamPoints,
      opponentpoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

//add a new player
team.addPlayer('Bugs', 'Bunny', 76);
//console.log(team.players);

//add a new game
team.addGame('Titans', 10, 9);
//console.log(team.games);
