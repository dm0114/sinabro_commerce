export class Count {
  static countMap = new Map();

  static getCount = (key) => {
    return this.countMap.get(key) || 0;
  };
  static increaseCount = (key) => {
    const count = this.getCount(key);
    this.countMap.set(key, count + 1);
  };
  static decreaseCount = (key) => {
    const count = this.getCount(key);
    if (count === 0) {
      return;
    }
    this.countMap.set(key, count - 1);
  };
  static getTotalCount = () => {
    return Array.from(this.countMap.values()).reduce(
      (acc, cur) => acc + cur,
      0
    );
  };
}
