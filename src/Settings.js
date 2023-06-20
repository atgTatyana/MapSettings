const defaultSettings = new Map([
  ['theme', 'dark'],
  ['music', 'trance'],
  ['difficulty', 'easy'],
]);

export default class Settings {
  constructor(obj) {
    this.settings = new Map();
    if (obj) {
      const keys = Object.keys(obj);
      keys.forEach((item) => {
        this.settings.set(item, obj[item]);
      });
    }
  }

  getSettings() {
    const defaultKeys = [...defaultSettings.keys()];
    defaultKeys.forEach((item) => {
      if (!this.settings.has(item)) {
        this.settings.set(item, defaultSettings.get(item));
      }
    });
    return this.settings;
  }
}
