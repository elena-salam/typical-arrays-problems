
exports.min = function min (array) {
  if(array===undefined || array===null ||array.length<=0){
    return 0;
  } else {
    return Math.min(...array);
  }
}



exports.max = function max (array) {
  if(array===undefined || array===null ||array.length<=0){
    return 0;
  } else {
    const a = array.sort((a, b)=>b-a)
  return(a[0])
  }
}

exports.avg = function avg (array) {
  if(array===undefined || array===null ||array.length<=0){
    return 0;
  } else {
    const a = array.reduce((acc, item) => {
      return acc+item}
      , 0);
      return a/array.length
    
  }
}
