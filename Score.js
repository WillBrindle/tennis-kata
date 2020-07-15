const InvalidScoreLabelError = require('./InvalidScoreLabelError.js');
const InvalidScoreError = require('./InvalidScoreError.js');

class Score {
  constructor(value = 0) {
    if (value < 0) {
      throw new InvalidScoreError();
    }
    this.value = value;
  }

  increment() {
    this.value += 1;
  }

  get label() {
    switch (this.value) {
      case 0:
        return 'Love';
      case 1:
        return 'Fifteen';
      case 2:
        return 'Thirty';
      case 3:
        return 'Forty';
      default:
        throw new InvalidScoreLabelError();
    }
  }
}

module.exports = Score;
