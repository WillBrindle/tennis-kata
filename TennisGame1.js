const Player = require('./Player.js');
const UnknownPlayerError = require('./UnknownPlayerError.js');

class TennisGame1 {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  wonPoint(playerName) {
    this.getPlayer(playerName).incrementScore();
  }

  getScore() {
    let score = '';
    let tempScore = 0;
    if (this.player1.score.value === this.player2.score.value) {
      if (this.player1.score.value < 3) {
        return `${this.player1.score.label}-All`;
      }
      return 'Deuce';
    }

    if (this.player1.score.value >= 4 || this.player2.score.value >= 4) {
      const minusResult = this.player1.score.value - this.player2.score.value;
      if (minusResult === 1) {
        return 'Advantage player1';
      }
      if (minusResult === -1) {
        return 'Advantage player2';
      }
      if (minusResult >= 2) {
        return 'Win for player1';
      }
      return 'Win for player2';
    }

    for (let i = 1; i < 3; i += 1) {
      if (i === 1) tempScore = this.player1.score;
      else {
        score += '-';
        tempScore = this.player2.score;
      }
      score += tempScore.label;
    }
    return score;
  }

  getPlayer(name) {
    if (this.player1.name === name) {
      return this.player1;
    }
    if (this.player2.name === name) {
      return this.player2;
    }
    throw new UnknownPlayerError(name);
  }
}

module.exports = TennisGame1;
