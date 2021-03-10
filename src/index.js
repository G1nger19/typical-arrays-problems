
exports.min = function min (array = []) {
  /**
  if (typeof(array) == 'undefined' || !array.length) return 0;
  let min_el = array[0];
  for(let i = 0;i<array.length;i++){
    if(typeof(array[i]) != 'number') return 0;
    if(array[i] < min_el) min_el = array[i];
  }
  return min_el;
  */
 return array.length === 0 ? 0 : array.reduce((a, b) => Math.min(a, b));
}

exports.max = function max (array) {
  if (typeof(array) == 'undefined' || !array.length) return 0;
  let max_el = array[0];
  for(let i = 0;i<array.length;i++){
    if(typeof(array[i]) != 'number') return 0;
    if(array[i] > max_el) max_el = array[i];
  }
  return max_el;
}

exports.avg = function avg (array) {
  if (typeof(array) == 'undefined' || !array.length) return 0;
  let sum = 0;
  for(let i = 0;i<array.length;i++){
    if(typeof(array[i]) != 'number') return 0;
    sum += array[i];
  }
  return sum / (array.length);
}
