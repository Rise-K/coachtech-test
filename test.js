'use strict';

// 問題１

const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});

console.log(result);

// 問題2

function leapYear(year){
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const checkYear = 2020;
if(leapYear(checkYear)){
  console.log(checkYear + '年はうるう年です');
}else{
  console.log(checkYear + '年はうるう年ではありません');
}