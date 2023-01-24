// qn 1

const phoneBook = {
  tom: '0731415926',
  izzi: '0727182920',
  paulr: '079012312',
};
  
const userName = 'tom';
const phoneNumber = phoneBook[userName];
  
console.log(
  `Ahh hello there ${userName}, looks like your phone number is ${phoneNumber}`
);

//qn 3

const jumbledAlpha = ['b', 'c', 'a', 'd'];

function sortList(arr) {
  const sortedArr = arr.sort();
  return sortedArr;
}

const sortedAlpha = sortList(jumbledAlpha);
console.log(sortedAlpha === jumbledAlpha);

console.log(jumbledAlpha);

// qn 4

const people = [
  { name: 'foluso' },
  { name: 'liam' },
  { name: 'dave' },
  { name: 'suneet' },
];
  
const updatedPeople = people.map((person) => {
  person.job = 'tutor';
  return person;
});
console.log(people);

// qn 5

function formatPeople(array) {
  if (array === []) return [];
  else {
    // do other formatting logic here...
  }
}

console.log( formatPeople([]) );

function formatPeople2(array, arr2) {
    if (array === arr2) return [];
    else {
      // do other formatting logic here...
    }
}

const outsideArr1 = [];
let outsideArr2 = [];

console.log( formatPeople2(outsideArr1, outsideArr2) );

outsideArr2 = outsideArr1;

console.log( formatPeople2(outsideArr1, outsideArr2) );
