let strLen = (str) => {
  len = str.length;
  return (len > 0 && len <= 10)? len : undefined;
}


let reverseStr = (str) => {
  return str.split("").reverse().join("");
}

let capitalize = (str) => {
  str = str.toLowerCase();
  let words = str.split(' ');
  let newString = '';
  words.forEach((word, index) => {
    let wordArr = word.split('');
    wordArr[0] = wordArr[0].toUpperCase();
    let newWord = wordArr.join('');
    
    if(index != words.length - 1) {
      newString += newWord + ' ';
    }
    else {
      newString += newWord;
    }
  });

  return newString;
}

module.exports = {strLen, reverseStr, capitalize};