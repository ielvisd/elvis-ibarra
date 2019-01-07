inputArray = [3, 6, -2, -5, 7, 3];

function adjacentElementsProduct(inputArray) {
  let newArray = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
    console.log(inputArray[i] * inputArray[i + 1]);
    newArray.push(inputArray[i] * inputArray[i + 1]);
    console.log(newArray);
  }
  console.log(Math.max(...newArray));
  return Math.max(...newArray);
}

adjacentElementsProduct(inputArray);
