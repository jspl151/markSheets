const data = [
  {
    student: 'Sriram',
    rollNo: 11,
    tamil: 80,
    english: 90,
    science: 86,
    maths: 97,
    social: 76,
  },
  {
    student: 'Ram',
    rollNo: 16,
    tamil: 60,
    english: 97,
    science: 100,
    maths: 34,
    social: 100,

  },
  {
    student: 'sri',
    rollNo: 18,
    tamil: 92,
    english: 96,
    science: 99,
    maths: 99,
    social: 87,
  },
  {
    student: 'mani',
    rollNo: 20,
    tamil: 43,
    english: 70,
    science: 90,
    maths: 83,
    social: 86,
  },
  {
    student: 'muthu',
    rollNo: 20,
    tamil: 45,
    english: 53,
    science: 60,
    maths: 38,
    social: 51,
  },
  {
    student: 'malar',
    rollNo: 20,
    tamil: 75,
    english: 70,
    science: 90,
    maths: 78,
    social: 59,
  },
];


/*const calculateResult = (markSheets) => {
  const subject = markSheets.map((mark) => {
    const result = (mark.tamil >= 35 && mark.english >= 35 && mark.science >= 35 && mark.maths >= 35 && mark.social >= 35) ? 'Pass' : 'Fail';

    return ({ ...mark, result: result });
  });

  return subject;
}
*/
const getTotal = (markSheet) => markSheet.tamil + markSheet.english + markSheet.science + markSheet.maths + markSheet.social;

const getResult = (markSheet) => Math.min(markSheet.tamil, markSheet.english, markSheet.science, markSheet.maths, markSheet.social) >= 35 ? 'pass' : 'fail';

const addFields = (markSheet) => ({
  ...markSheet , 
  total : getTotal(markSheet),
  result : getResult(markSheet)
});

const sortByTotal = (markSheets) => {
  const sortedList = markSheets.sort((a, b) => b.total - a.total);

  return sortedList;
}

const addRank = (sortedList) => {
   let rank=0;
  const rankedList = sortedList.map((student) => ({
  ...student , 
  rank : student.result === 'pass' ? rank+=1 : '-' 
  }));
  return rankedList ;
}

const getCount = (rankedList) => {
  const count = rankedList.reduce((acc,markSheet)=>
    ({
    ...acc, 
    pass: markSheet.result === 'pass' ? acc.pass+1 : acc.pass,
    fail : markSheet.result === 'fail' ? acc.fail+1 : acc.fail
    }),{pass : 0 , fail:0});
  
  return count;
};
  
const main = () => {
  const studentDataList = data.map(addFields);
  const sortedList = sortByTotal(studentDataList);
  const rankedList = addRank(sortedList);
  console.table(rankedList);
  console.log(getCount(rankedList));
};

main();
