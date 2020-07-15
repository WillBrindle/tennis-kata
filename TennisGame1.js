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
      switch (this.player1.score.value) {
        case 0:
          score = 'Love-All';
          break;
        case 1:
          score = 'Fifteen-All';
          break;
        case 2:
          score = 'Thirty-All';
          break;
        default:
          score = 'Deuce';
          break;
      }
    } else if (this.player1.score.value >= 4 || this.player2.score.value >= 4) {
      const minusResult = this.player1.score.value - this.player2.score.value;
      if (minusResult === 1) score = 'Advantage player1';
      else if (minusResult === -1) score = 'Advantage player2';
      else if (minusResult >= 2) score = 'Win for player1';
      else score = 'Win for player2';
    } else {
      for (let i = 1; i < 3; i += 1) {
        if (i === 1) tempScore = this.player1.score.value;
        else {
          score += '-';
          tempScore = this.player2.score.value;
        }
        switch (tempScore) {
          case 0:
            score += 'Love';
            break;
          case 1:
            score += 'Fifteen';
            break;
          case 2:
            score += 'Thirty';
            break;
          case 3:
            score += 'Forty';
            break;
          default:
            break;
        }
      }
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
