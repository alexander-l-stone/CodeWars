function mutateMyStrings(string1, string2){
  let arr1 = string1.split('');
  let arr2 = string2.split('');
  let finalArr = [string1];
  let length = Math.max(arr1.length, arr2.length);
  
  for (let i = 0; i < length; i++) {
    if (i >= arr1.length) {
      arr1.push(arr2[i]);
      
      let something = arr1.join('');
      if (!finalArr.includes(something)) {finalArr.push(something);}
 
    } else if (i >= arr2.length) {
    
      return finalArr.join('\n');    
    }
    else {
      arr1[i] = arr2[i];
      let something = arr1.join('');
      if (!finalArr.includes(something)) {finalArr.push(something);}
    }
  }
  finalArr.push('');
  return finalArr.join('\n');
 }