/**
 * PREPROCESS DATES
 * On a web form, users are asked to enter dates which
 * come in as strings. Before storing them to the database,
 * they need to be converted to a standard date format.
 *
 * Write a function to convert the dates as described.
 *
 * Given a date string in the format "Day Month Year", where:
 *
 *  - Day a string in the form "1st", "2nd", "3rd", "21st", "22nd", "23rd", "31st" and all others are the number + "th", e.g. "4th" or "12th".
 *  - Month is the first three letters of the English language months, like "jan" for January through "Dec" for December.
 *  - Year is 4 digits ranging from 1900 to 2100.
 *
 * Convert the date string "Day Month Year" to the date string "YYYY-MM-DD" in the format "4 digit year - 2 digit month - 2 digit day"
 *
 * Example
 *  - 1st Mar 1974 -> 1974-03-01
 *  - 22nd Jan 2013 -> 2013-01-22
 *  - 7th Apr 1904 -> 1904-04-07
 */

const dates = [
  "20th Oct 2052",
  "26th May 1960",
  "20th Sep 1958",
  "16th Mar 2068",
  "25th May 1912",
  "16th Dec 2018",
  "26th Dec 2061",
  "4th Nov 2030",
  "28th Jul 1963",
  "1st Mar 1974",
  "22nd Jan 2013",
  "7th Apr 1904",
];

const DaysEnum = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

Object.freeze(DaysEnum);

const clearDay = (day) => {
  let dayFormated;
  let dayWithoutLetters = day.slice(0, -2);

  if (dayWithoutLetters.length < 2) dayFormated = `0${dayWithoutLetters}`;
  else dayFormated = dayWithoutLetters;

  return dayFormated;
};

const preprocessDate = (dates) => {
  let datesFormated = [];

  for (let i = 0; i < dates.length; i++) {
    const date = dates[i];
    const [day, moth, year] = date.split(" ");

    const dayFormated = clearDay(day);
    const monthNumber = DaysEnum[moth];

    const fulldate = `${year}-${monthNumber}-${dayFormated}`;
    datesFormated.push(fulldate);
  }

  return datesFormated;
};

console.log(preprocessDate(dates));
