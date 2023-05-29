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

const calculateResult = (markSheets) => {
  const subject = markSheets.map((mark)=> {
  const result = (mark.tamil  >= 35 && mark.english >= 35 && mark.science >= 35 && mark.maths >= 35 && mark.social >= 35) ? 'Pass' : 'Fail';
   
    return ({...mark , result : result});
  });

  return subject ;
}

const calculateTotal = (markSheets) => {
  const sum = markSheets.map((markSheet) => {
    const total = markSheet.tamil + markSheet.english + markSheet.science + markSheet.maths + markSheet.social;
    const result = Math.min(markSheet.tamil , markSheet.english , markSheet.science , markSheet.maths , markSheet.social)>=35 ? 'Pass' : 'Fail';
  
    return ({ ...markSheet, total: total, result : result});
  });

  return sum;
}

const main = () => {
  console.table(calculateTotal(data));
  console.table(calculateResult(data));
};

main();
