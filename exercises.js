// Question 1
const isRealPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");
  return str == str.split('').reverse().join('') ? true : false;
};
isRealPalindrome("madam")

// Question 2
const runningTotal = (arr) => {
   let sum = 0;

    return arr.map(currentNumber => {
        sum += currentNumber;
        return sum;
    });
};

// Question 3
const swap = (str) => {
  let newStr = ""
  str = str.split(" ")
  for (let i = 0; i < str.length; i++){
    if (str[i].length > 1) {
      newStr += str[i][str[i].length - 1];
    }
    for (let j = 1; j < str[i].length - 1; j++){
      newStr += str[i][j]
    }
    newStr += str[i][0];
    if (str[i + 1]) {
      newStr += " "
    }
  }
  return newStr
};

// Question 4
const wordSizes = (str) => {
  let obj = {};
  if (str === ("")) {
    return obj
  }
  str = str.split(" ")
  for (let i = 0; i < str.length; i++){
    if (obj[str[i].length]) {
      obj[str[i].length] ++
    } else {
      obj[str[i].length] = 1
    }
  }
  return obj
};

// Question 5
const union = (arr1, arr2) => {
  return [...new Set(arr1.concat(arr2))];
};

// Question 6
const firstRecurring = (str) => {
  let obj = {}
  let letter = ""
  for (let i = 0; i < str.length; i++){
    if (obj[str[i]]) {
      return str[i]
    } else {
      obj[str[i]] = 1
    }
  }
  return "";
};

// Question 7
const showMultiplicativeAverage = (arr) => {
  let newArr = arr.reduce((a, b) => a * b);
  return (newArr / arr.length).toFixed(3);
};


// Quetsion 8
const multiplyList = (arr1, arr2) => {
  return arr1.map((val, i) => val * arr2[i])
};

// Question 9
const sequence = (n) => {
  let newArr = [];
  for (let i = 1; i <= n; i++) {
    newArr.push(i);
  }
  return newArr;
};

// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
};
