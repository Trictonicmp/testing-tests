let strLen = (str) => {
  len = str.length;
  return (len > 0 && len <= 10)? len : undefined;
}

module.exports = strLen;