//for global use npm install -g <packname>
//for local use npm install -i <packname>


//to acess the package 
const lodsash=require('lodash');

const items=[1,[2,[3,[4]]]];
const newItems= _.flattenDeep(items)
console.log(newItems)