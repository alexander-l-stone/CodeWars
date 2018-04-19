function formatWords(words){
  if (words === null){
    return '';    
  }
  words = words.filter(word => word !== '');
  if (words.length < 1){
    return '';
  }
  if (words.length < 2){
    return words[0];
  }
  let lastEl = words.pop();
  words = words.join(', ')
  return `${words} and ${lastEl}`
}

function formatWordsReduce(words){
  if(!words) return '';
  words = words.filter( word => word !== '');
  if (words.length < 1){
    return '';
  }
  if (words.length < 2){
    return words[0];
  }
  let lastEl = words.pop();
  let reduced = words.reduce( (accumulator, word) => `${accumulator}, ${word}`);
  return `${reduced} and ${lastEl}`
}