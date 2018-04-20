function solution(str) {
	let array = str.split('');
  let stack = []
  let length = array.length;
  for(let i = 0; i < length; i++){
    stack.push(array.pop());
  }
  return stack.join('');
}

