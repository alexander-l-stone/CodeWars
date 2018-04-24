function cubeOdd(arr) {
  let i = arr.map(x => x*x*x);
  if (i.includes(NaN)) {return undefined;}
  
  i = i.filter( elem => elem%2 !== 0);
  
  if (i.length < 1) {return 0;}
  
  return i.reduce( (acc, el) => acc + el, 0);
  
  } 
  