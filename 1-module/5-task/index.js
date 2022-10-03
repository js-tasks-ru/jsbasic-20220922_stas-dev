function truncate(str, maxlength = 20) {
  
  if(str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }

  return str;

}
