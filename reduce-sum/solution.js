function find_average(array) {
  return array.reduce( (a, e) => {return a+e}, 0)/array.length;
}