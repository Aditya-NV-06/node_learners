const { log } = require('console');
const os=require('os');


//for the userinfo
const user=os.userInfo();
console.log(user);

//to show the time 
console.log(`${os.uptime()}`)


const current={ 
    release:os.release(),
    memory:os.totalmem(),
    fun:os.freemem(),
}

console.log(current) 


//path in node

const path=require('path');

console.log(path.sep);
console.log(path.join('/text'));

const base=path.basename('/text');
console.log(base);


const absolute=path.resolve(__dirname,base);
console.log(absolute)


//fs in node 

const {readFileSync,writeFileSync}=require('fs');


const read=readFileSync('text.txt');
const write=writeFileSync(
    'text.txt'
)
console.log(read,write)