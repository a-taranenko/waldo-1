function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      found(i + 1);   // execute callback
    }
  }
}

function actionWhenFound(foundInstance) {
  console.log("Found Waldo at index", foundInstance + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);