// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words) {
  if(words.length == 0)
  {
    return null
  }
  else
  {
    let longW = "";
    let maxid = 0;
    for(let i=0; i<words.length; i++)
    {
      if (words[i].length>maxid)
      {
        maxid = words[i].length
        longW = words[i]
      }
  }
  return longW
}
}


// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  let sum = 0
  for(let i = 0 ; i < numbers.length ; i++)
  {
    sum += numbers[i] 
  }
  return sum
}

function add(numbersAvg) {
  if(!numbersAvg.length) return 0
  let sum = 0 
  for(let i = 0 ; i < numbersAvg.length ; i++)
  {
    if(typeof(numbersAvg[i]) == "string")
      {
        sum += numbersAvg[i].length
      }
      else if(typeof(numbersAvg[i]) == "number" || typeof(numbersAvg[i]) == "boolean")
      {
        sum += numbersAvg[i]
      }
      else
      {
        throw new Error('Unsupported data type sir or ma\'am')
      } 
    }
    return sum
  }


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersArr) {
  if (numbersArr.length==0) return null 
  else return add(numbersArr)/numbersArr.length 
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr) {
  if (wordsArr.length==0) return null 
  else return add(wordsArr)/wordsArr.length 
 
}

function avg(arr) {
  let avg = averageWordLength(arr);
  if (avg) {
    return parseFloat(avg.toFixed(2));
  }
  return null;
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(arr) {

  let uniqueArr = []
  for (let i of arr) {
    let index = arr.indexOf(i)
    if (uniqueArr.indexOf(index) == -1) {
      uniqueArr.push(index)
    }
  }
  if (!uniqueArr.length) {
    return null
  }
  let uniqueArrList = [];

  for (let i of uniqueArr) {
    uniqueArrList.push(arr[i])
  }
  return uniqueArrList
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr, word) {
  if (!arr.length) {
    return null
  }
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] == word) {
      return true
    }
  }

}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(arr, search) {
  if (!arr.length) {
    return 0
  }
  let count = 0
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] == search)  {
      count += 1
    }
  }
  return count
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];


function maximumProduct(matrix) {
  let result = 0;

  for (let i = 0; i <= matrix.length - 4; i++) {
    let P1 = 1;
    let P2 = 1;
    for (let k = 0; k < matrix[0].length; k++) {

      for (let j = k; j <= k + 3; j++) {
        if (matrix[i][j]) {
          P1 *= matrix[i][j];
        }
      }


      for (let j = 0; j <= 3; j++) {
        P2 *= matrix[i + j][k];
        console.log(matrix[i + j][k]);
      }

      if (P1 > P2) {
        result = P1;
      } else {
        result = P2;
      }
    }
  }
  return result;
}