// const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
// const passingGrades = grades.filter(num => num >= 70);

// console.log(passingGrades);

const animals = [
  { name: "Fluffy", species: "rabbit" },
  { name: "Carlos", species: "dog" }
];

const isDog = function(animal) {
  return animal.species === 'dog';
};
//returns undefined?

const dogs = animals.filter(isDog);