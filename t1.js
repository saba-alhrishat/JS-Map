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
