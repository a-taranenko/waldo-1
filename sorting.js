var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log(students);

function studentSort(a, b) {
  if (a['age'] > b['age'] && a['name'] < b['name']) {
    return - 1;
  } else {
    return 1;
  }
}

console.log(students.sort(studentSort));