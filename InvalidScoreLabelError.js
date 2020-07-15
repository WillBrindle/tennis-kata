class InvalidScoreLabelError extends Error {
  constructor() {
    super('Score cannot be converted to a label.');
    Error.captureStackTrace(this, InvalidScoreLabelError);
  }
}

module.exports = InvalidScoreLabelError;
