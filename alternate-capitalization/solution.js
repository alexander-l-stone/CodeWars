function capitalize(s){
    s = s.split('');
    let origin = s.slice();
    for (let i in s){
        if(i % 2 === 0){
            s[i] = s[i].toUpperCase();
        }
    }
    for (let i in origin){
        if (i % 2 === 1){
            origin[i] = origin[i].toUpperCase();
        }
    }
    s = s.join('');
    origin = origin.join('');
    return [s, origin];
  };