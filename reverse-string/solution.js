function recurseReverse(rstr, count, str){
  if (count === str.length-1){
    rstr = str.charAt(count);
    return [rstr, count, str];
  }
  else {
    rstr = recurseReverse(rstr, count+1, str)[0];
    rstr = rstr + str.charAt(count);
    console.log(rstr)
    return [rstr, count, str];
  }
}


function solution(str){
  console.log(str);
  return recurseReverse('', 0, str)[0];
}
