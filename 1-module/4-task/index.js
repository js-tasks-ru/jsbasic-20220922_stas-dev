function checkSpam(str) {
  
  let toLowerStr = str.toLowerCase();
  let bet = '1xbet';
  let xxx = 'xxx';
  
  return toLowerStr.includes(bet) || toLowerStr.includes(xxx);
}
