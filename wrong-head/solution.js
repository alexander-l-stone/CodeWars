function fixTheMeerkat(arr) {
  if (arr.length > 1){
    let first = arr[0];
    let last = arr[arr.length-1];
    arr[0] = last;
    arr[arr.length-1] = first;
    return arr;
  }
  else {
    return arr;
  }
}