let strLen = (str) => {
  len = str.length;
  return (len > 0 && len <= 10)? len : undefined;
}


let reverseStr = (str) => {
  return str.split("").reverse().join("");
}

module.exports = {strLen, reverseStr};