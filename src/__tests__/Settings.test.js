import Settings from '../Settings';

test.each([
  [{ music: 'rock' }, [['music', 'rock']]],
  [null, []],
])('testing class Settings with %s', (setting, expected) => {
  const map = new Settings(setting);
  const { settings } = map;
  expect([...settings]).toEqual(expected);
});

test('testing function getSettings', () => {
  const map = new Settings({ music: 'rock' });
  const result = map.getSettings();
  expect([...result]).toEqual([['music', 'rock'], ['theme', 'dark'], ['difficulty', 'easy']]);
});
