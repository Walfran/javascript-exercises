
  const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

function findTheOldest(people) {
    const currentYear = new Date().getFullYear();

    return people.sort((a, b) => {
        const ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        const ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;
        return ageB - ageA;
    })[0];
}

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
