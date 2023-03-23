const moment = require("moment");

const reISO =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(?:Z|(\+|-)([\d|:]*))?$/;

function momentJsDateParser(key, value) {
  if (typeof value === "string" && reISO.test(value)) {
    return moment.utc(value);
  }
  return value;
}

module.exports = { momentJsDateParser };
