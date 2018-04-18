function disemvowel(str) {
  regex = new RegExp('[aeiou]', 'gi');
  return str.replace(regex, '');
}