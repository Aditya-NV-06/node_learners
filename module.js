//modules in node
//General modules or built modules
//os,path,fs,http


const names=(name)=>
{ 
    console.log(`name is ${name}`);
    return name;
}

names('Aditya');

module.exports=names;