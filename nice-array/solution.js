function isNice(arr){
  console.log(arr);
  if (arr.length < 1){
    return false;
  }
  let boolean = true;
  arr.forEach( (e) => {
    if (!(arr.includes(e-1)) && !(arr.includes(e+1))){
      console.log(e);
      boolean = false;
      return boolean;
    }
  });
  return boolean;
}