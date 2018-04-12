function insertDash(num) {
  let stringNum = num.toString();
  for (i=1;i<stringNum.length; i++){
    if ((parseInt(stringNum[i])%2===1) && (parseInt(stringNum[i-1])%2===1))
     {
     stringNum = stringNum.slice(0,i)+'-'+stringNum.slice(i);
     i++;
     }
  }
  return stringNum;
}