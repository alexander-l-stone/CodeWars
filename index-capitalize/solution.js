function capitalize(s, arr) {
  return s.split('').map((ele, i) => {
    if (arr.includes(i) && i < (s.length)) {
      return ele.toUpperCase()
    } else {
      return ele
    }
  }).join('')
 };