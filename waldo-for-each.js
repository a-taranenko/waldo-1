function findWaldo(arr, found) {
  var counter = 0;

  arr.forEach(function (instance) {
    if (instance === "Waldo") {
      found(counter + 1);
    } else {
      counter++;
    }
  });
}

function actionWhenFound(foundInstance) {
  console.log("Found Waldo at index " + foundInstance + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);