
type StorageValue<T = any> = {
  data: T;
  expired: number;
};

const localstorage = {
  set<T = any>(key: string, value: T, expired: number) {
    const data: StorageValue<T> = {
      data: value,
      expired: expired === 0 ? 0 : Date.now() + 1000 * 60 * expired,
    };
    localStorage.setItem(key, JSON.stringify(data));
  },
  fetch<T = any>(key: string): T | false {
    const raw = localStorage.getItem(key);
    if (!raw) return false;
    let value: StorageValue<T>;
    try {
      value = JSON.parse(raw);
    } catch (e) {
      return false;
    }
    if (value) {
      if (value.expired !== 0 && Date.now() >= value.expired) {
        localstorage.remove(key);
        return false;
      } else {
        return value.data;
      }
    }
    return false;
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};

export default localstorage;
