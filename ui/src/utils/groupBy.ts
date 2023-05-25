export type GroupBy<T> = { [key: string]: T[] };

export const groupBy = <T>(data: T[], key: keyof T | string[]): GroupBy<T> =>
  data.reduce((acc: GroupBy<T>, curr: T) => {
    let groupKey = undefined;

    if (Array.isArray(key)) {
      let currObj: any = curr;

      for (let i = 0; i < key.length - 1; i++) {
        currObj = currObj[key[i]];
      }

      groupKey = String(currObj[key[key.length - 1]]);
    } else {
      groupKey = String(curr[key]);
    }

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(curr);

    return acc;
  }, {});
