class UnknownPlayerError extends Error {
  constructor(name) {
    super(`Unknown player '${name}'. They are not particpating in this game.`);
    Error.captureStackTrace(this, UnknownPlayerError);
  }
}

module.exports = UnknownPlayerError;
