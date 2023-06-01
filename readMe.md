const addRank = (sortedList) => {
  return sortedList.reduce((acc,student) => {
  const isPass = student.result === 'pass';
    return {
    ...acc ,
     markSheets:[
        ...acc.markSheets ,
        {
        ...student ,
        rank: isPass ? acc.rank+1 :'-'
        }
      ],
    rank : isPass ? acc.rank+1 : acc.rank
    }
},{markSheets:[],rank:0});

}