/* eslint-env jest */

const Score = require('./Score.js');

describe('Scores can be converted to labels', () => {
  it('Can convert the default value to love', () => {
    expect(new Score().label).toBe('Love');
  });

  it('Can convert the value of 0 to love', () => {
    expect(new Score(0).label).toBe('Love');
  });

  it('Can convert the value of 1 to fifteen', () => {
    expect(new Score(1).label).toBe('Fifteen');
  });

  it('Can convert the value of 2 to thirty', () => {
    expect(new Score(2).label).toBe('Thirty');
  });

  it('Can convert the value of 3 to forty', () => {
    expect(new Score(3).label).toBe('Forty');
  });

  it('Cannot convert values less than 0', () => {
    expect(() => new Score(-1).label).toThrow();
  });

  it('Cannot convert values greater than 3', () => {
    expect(() => new Score(4).label).toThrow();
  });
});

describe('Scores can be incremented', () => {
  it('can be incremented from 0 to 1', () => {
    const score = new Score();
    score.increment();
    expect(score.value).toBe(1);
  });

  it('can be incremented from 3 to 4', () => {
    const score = new Score(3);
    score.increment();
    expect(score.value).toBe(4);
  });
});

describe('Scores can be incremented', () => {
  it('throws an error on score less than 0', () => {
    expect(() => new Score(-1)).toThrow();
  });
});
