function fibonacciSeriesPainter(number) {
  var fibonacciSeries = function* (number) {
    if (number === 0) {
      return [0];
    } else if (number === 1) {
      return [1, 1];
    } else {
      var values = fibonacciSeries(number - 1);
      values.push(values[values.length - 1] + values[values.length - 2]);
      yield values;
    }
  };

  return fibonacciSeries(number).next().value;
}

//console.info(fibonacciSeriesPainter(4));

function romanizer(numbers) {
  let romanString = [];
  const romanOneToTen = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  const romanTenToHundred = [
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "C",
  ];
  const romanHundredToThousand = [
    "C",
    "CXX",
    "CXXX",
    "CD",
    "D",
    "DX",
    "DXX",
    "DXXX",
    "CM",
    "M",
  ];
  for (let number of numbers) {
    if (number > 0 && number <= 1000) {
      let numToStr = number.toString();
      let len = numToStr.length;
      let romanNumber = "";
      for (let i = 0; i < len; i++) {
        if (number % 10 == 0) {
          romanString.push(romanTenToHundred[numToStr[i] - 1]);
          break;
        }
        if (number % 100 == 0) {
          romanString.push(romanHundredToThousand[numToStr[i] - 1]);
          break;
        }
        if (len === 1) {
          romanNumber += romanOneToTen[numToStr[i] - 1];
        } else if (len === 2) {
          if (i == 0) {
            // tens place
            romanNumber += romanTenToHundred[numToStr[i] - 1];
          } else if (i == 1) {
            // units place
            romanNumber += romanOneToTen[numToStr[i] - 1];
          }
        } else if (len === 3) {
          if (i == 0) {
            // hundreths place
            romanNumber += romanHundredToThousand[numToStr[i] - 1];
          } else if (i == 1) {
            // tens place
            romanNumber += romanTenToHundred[numToStr[i] - 1];
          } else if (i == 2) {
            // units place
            romanNumber += romanOneToTen[numToStr[i] - 1];
          }
        } else {
          romanNumber += romanHundredToThousand[9];
        }
      }
      romanString.push(romanNumber);
    }
  }
  return romanString.filter((el) => el != "");
}

console.log(romanizer([5, 75, 80, 99, 100, 50]));
