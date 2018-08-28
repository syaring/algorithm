function solution(n, m, x, y) {
  var varX = [];
  var varY = [];
  var count = 0;
  var result = 0;

  for (var i = 0; i < x.length; i++) {
    if (varX[x[i]]) {
      varX[x[i]]++;
    } else {
      varX[x[i]] = 1;
    }
  }

  for (i = 0; i < varX.length; i++) {
    if (varX[i]) {
      count += varX[i];
    }
    
    if (count === x.length / 2) {
      result++;
    } else if (count > x.length / 2) {
      break;
    }
  }

  count = 0;

  for (i = 0; i < y.length; i++) {
    if (varY[y[i]]) {
      varY[y[i]]++;
    } else {
      varY[y[i]] = 1;
    }
  }

  for (i = 0; i < varY.length; i++) {
    if (varY[i]) {
      count += varY[i]
    };
    
    if (count === y.length / 2) {
      result++;
    } else if (count > y.length / 2) {
      break;
    }
  }
  return result;
}

//console.log(solution(5, 5, [0, 4, 2, 0], [0, 0, 1, 4])); //log 1
