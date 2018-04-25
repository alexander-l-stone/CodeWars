function high(x){
  function toUnicode(arr){
  return arr.map( e => {
    let split = e.split('');
    let y = split.map(e => e.charCodeAt(0)-96);
    if(y.length < 1){
      return 0;
    }
    return y.reduce((a, e) => a+e)
    });
  }
  let array = x.toLowerCase().split(' ');
  if(array.length < 1){
    return '';
  }
  let pointArray = toUnicode(array);
  let highestVal = 0;
  let index = -1;
  for(i in array){
    if(pointArray[i] > highestVal){
      highestVal = pointArray[i];
      index = i;
    }
  }
  if(array[index] === undefined){
    return '';
  }
  return array[index];
}