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

const clearDays = (day) => {
  let dayFormated = day.slice(0, -2);
  if (dayFormated.length < 2) {
    return `0${dayFormated}`;
  }
  return dayFormated;
};

for (let i = 0; i < dates.length; i++) {
  const date = dates[i];

  const [day, moth, year] = date.split(" ");
  const dayFormated = clearDays(day);
  const monthNumber = DaysEnum[moth];
  
  const fulldate = `${year}-${monthNumber}-${dayFormated}`;
  console.log(fulldate);
}
