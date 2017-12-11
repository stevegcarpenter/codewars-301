function capitalize(s){
  return [s.split('').map((e,idx) => {
    return idx % 2 ? e : e.toUpperCase();
  }).join(''),
  s.split('').map((e,idx) => {
    return idx % 2 ? e.toUpperCase() : e;
  }).join('')];
};
