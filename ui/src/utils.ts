import moment from "moment";

const reISO =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(?:Z|(\+|-)([\d|:]*))?$/;
export function momentJsDateParser(key: string, value: any): any {
  if (typeof value === "string" && reISO.test(value)) {
    return moment.utc(value);
  }
  return value;
}
