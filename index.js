const csvToJson = require('csvtojson');

const getTotal = (markSheet) => parseInt(markSheet.tamil) + parseInt(markSheet.english) + parseInt(markSheet.science) + parseInt(markSheet.maths) + parseInt(markSheet.social);

const getResult = (markSheet) => Math.min(markSheet.tamil, markSheet.english, markSheet.science, markSheet.maths, markSheet.social) >= 35 ? 'pass' : 'fail';

const addFields = (markSheet) => ({
  ...markSheet,
  total: getTotal(markSheet),
  result: getResult(markSheet)
});

const sortByTotal = (markSheets) => {
  const sortedList = markSheets.sort((a, b) => b.total - a.total);

  return sortedList;
}

const addRank = (sortedList) => {
  const rankedList = sortedList.map((student, index, array) =>
  ({
    ...student,
    rank: (student.result === 'pass')
      ? array.filter((value) => ((value.result === 'pass') && (value.total > student.total))).length + 1
      : '-'
  }));

  return rankedList;
};

const getCount = (rankedList) => rankedList.reduce((acc, markSheet) =>
({
  ...acc,
  pass: markSheet.result === 'pass' ? acc.pass + 1 : acc.pass,
  fail: markSheet.result === 'fail' ? acc.fail + 1 : acc.fail
}), { pass: 0, fail: 0 });

const main = async () => {
  const data = await csvToJson().fromFile('./markSheetData.csv');

  //const main = () => {
  const studentDataList = data.map(addFields);
  const sortedList = sortByTotal(studentDataList);
  const rankedList = addRank(sortedList);
  console.table(addRank(sortedList));
  console.log(getCount(rankedList));

};

main();