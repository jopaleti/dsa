const myMap = new Map();
myMap.set('freeCodeCamp', 'Awesome!');
myMap.set('google', 'Great!');
console.log(myMap)
for (const [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
console.log(Array.from(myMap))
console.log(Array.from("My name is Oluwatobi"))