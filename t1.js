// t1

let cleanNames = [" injustice", " SuperMan", "Batman ", " flash "];

let clean= cleanNames.map(ele  => ele.trim()) ;
console.log(clean);

// t2

const miles = [10, 20, 30, 40];
const aff = miles.map(a => a* 1.60934 );
console.log(aff);

// t3

const num = [1, 2, 3, 4, 5];

const bb = num.map(a => a*a)
.reduce((sum,cur) => sum + cur, 0);
const fi = bb / num.length;
console.log(fi);

// t4

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((nn)=> nn+4);
console.log(result);

// t5

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = number
.filter(ele => ele % 2 === 0 )
.map(a=> a*2)
.filter(ele => ele % 2 === 0 )
.reduce(( sum , cur) => sum +cur ,0 );
console.log(even);

// t6

const word = ["apple", "banana" , "cherry" , "date"];
const re = word.map(function(ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join(" ");
console.log(re);

// t7

const heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
  ];
  
  const newHeros = heros.map((hero, index) => {
    return {
      hero: hero.name, 
      power: hero.power,
      id: index 
    };
  });
  
  console.log(newHeros);
  


//   t8

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const our = inputWords.filter(function (ele){

return ele.length >=7;

})
console.log(our);

// t9

const nu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = nu.filter(num => num %2 !==0);
console.log(odd);

const div = nu.filter(num => num %2 !==0 || num %5 ===0 );
console.log(div);

const divseq = nu.filter(num => num %3 !==0).map(num => num ** 2);
console.log(divseq);

const sq = nu.filter(num => num %5 ===0 )

.map( num => num ** 2 )
.reduce ((sum, num ) => sum , num ,0 );

console.log(sq);

// t10

let nums = [11, 22, 33, 46, 75, 86, 97, 98];
let squaredEvenNums = nums
.filter(num => num % 2 === 0) 
  .map(num => num ** 2);

console.log (`squaredEvenNums: ${squaredEvenNums}`); 

let sum = nums.reduce((total, num) => total + num, 0); 
console.log (`Sum of array elements: ${sum}`); 
