const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// the above examples uses type inference
// we need to add an annotation when we initialise an empty array
const carMakers2: string[] = [];

// type inference
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];
// type annotation
const carsByMake2: string[][] = [];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// help with 'map' - see auto complete
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];

// when we need to use annotation
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push('2030-10-10');
importantDates2.push(new Date());