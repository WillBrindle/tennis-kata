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
    if (this.gameFinished()) {
      return `Win for ${this.getLeadingPlayer().name}`;
    }
    if (this.isAdvantage()) {
      return `Advantage ${this.getLeadingPlayer().name}`;
    }
    if (this.isDeuce()) {
      return 'Deuce';
    }
    if (this.player1.score.value === this.player2.score.value) {
      return `${this.player1.score.label}-All`;
    }

    return `${this.player1.score.label}-${this.player2.score.label}`;
  }

  gameFinished() {
    return this.doesEitherPlayerHaveScorePastForty()
      && Math.abs(this.getScoreDifference()) >= 2;
  }

  getLeadingPlayer() {
    return this.player1.score.value > this.player2.score.value ? this.player1 : this.player2;
  }

  isAdvantage() {
    return this.doesEitherPlayerHaveScorePastForty()
      && this.getScoreDifference() === 1;
  }

  isDeuce() {
    return this.player1.score.value >= 3 && this.player1.score.value === this.player2.score.value;
  }

  getScoreDifference() {
    return this.player1.score.value - this.player2.score.value;
  }

  doesEitherPlayerHaveScorePastForty() {
    return this.player1.score.value >= 4 || this.player2.score.value >= 4;
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
