class InvalidScoreError extends Error {
  constructor() {
    super('Scores cannot have a negative value.');
    Error.captureStackTrace(this, InvalidScoreError);
  }
}

module.exports = InvalidScoreError;
