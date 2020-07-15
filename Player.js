const Score = require("./Score");

class Player {
  constructor(name) {
    this.name = name;
    this.score = new Score();
  }

  incrementScore() {
    this.score.increment();
  }
}

module.exports = Player;
