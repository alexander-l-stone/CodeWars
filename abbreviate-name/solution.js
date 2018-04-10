function abbrevName(name){
  const charOne = name.charAt(0).toUpperCase();
  var i = 0;
  while(name.charAt(i) !== " "){
      i++;
    }
  const charTwo = name.charAt(i+1).toUpperCase();
  return(`${charOne}.${charTwo}`);
  }