// Template literals (String interpolation)
let fn = "Rakesh";
let ln = "Chotalia";

let name = `${fn} ${ln}`;

console.log(name);

// Destructuring Objects
const personalInformation = {
    firstName: 'Ole Gunnar',
    lastName: 'Solksjaer',
    city: 'Watford'
};

const {firstName: fname, lastName} = personalInformation;

console.log(`${fname} ${lastName}`);

// destructuring arrays
let [firstName, middleName, surname] = ['Paul','Labille','Pogba'];

console.log(`${firstName} ${middleName} ${surname}`);

// object literals
function addressMaker(address){
    const {city, state} = address;
    const newAddress = { 
        city, 
        state,
        country: 'UK'
    };

    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}
addressMaker({city: 'Watford', state: 'Hertfordshire'});

// for of loop
let incomes = [62000, 67000, 73000];
let total = 0;
let bonus = 0;

for(const income of incomes){
    total += income;
}
console.log(`Total Income: ${total}`);

for(let income of incomes){
    bonus += income + 5000;
}
console.log(`Total Bonus: ${bonus}`);

// spread operator
let example1 = [1,2,3,4,5,6];
let example2 = [0,...example1,7];

console.log(example2);

// Rest operator
function add(...nums){
    
    console.log(nums);
}

add(4,5,6,8,12);

// arrow functions
function add(...nums){
    // old
    // let total = nums.reduce(function(x,y) {
    //     return x + y;
    // });
    
    // ES6
    // let total = nums.reduce((x,y) => {
    //     return x + y;
    // });

    let total = nums.reduce((x,y) => x + y);

    console.log(total);
    
}

add(4,5,6,8,12);

// default params
// function add(numArray = []){
//     let total = 0;
//     console.log(numArray);
//     // numArray.forEach((element) => {
//     //     total += element;
//     // });
//     console.log(total);
// }

// add();

// includes
let numArray = [1,2,3,4,5];
// not supported by IE
console.log(numArray.includes(2));

// let and consts
// if(false){
//     let example = 5;
// }

// console.log(example);

const ex = 5;
console.log(ex);

const ex1 = {};
ex1.fn = 'Rakesh';
console.log(ex1);

// import/export
import { data } from './example.js';
let updatedData = data;
updatedData = [...data,5];
console.log(updatedData);

// padstart and padend
let n = 'Rakesh';
console.log(n.padStart(10,'a'));
console.log(n.padEnd(10,'a'));

// classes
import { Animal, Cat } from './animal.js';

let cat = new Animal('Cat',4);

// cat.legs = 3;
// cat.makeNoise('meow');
console.log(cat.metaData);
console.log(cat);
console.log(Animal.return10());
let cat1 = new Cat('Cat',4);
console.log(cat1.makeNoise());
console.log(cat1.metaData);

// aync await
// const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

// async function getTop100Campers() {
//     const response = await fetch(apiUrl);
//     const json = await response.json();

//     console.log(json[0]);
// };


// function getTop100Campers() {
//     fetch(apiUrl)
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json[0]);
//     })
//     .catch((error) => {
//         console.log('failed');
//     });
// }

//getTop100Campers();

function resolveAfter3Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resloved');
        }, 3000);
    });
}

// resolveAfter3Seconds().then((data) => {
//     console.log(data);
// });

// async function getAsyncData() {
//     const result = await resolveAfter3Seconds();
//     console.log(result);
// }

// getAsyncData();