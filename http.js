const http=require('http');

const server=http.createServer((req,res)=>{ 
    if(res.url ==='/'){
        res.end('End')
    }
    if(res.url ==='/about'){ 
        res.end('Here is a history');
    }
    res.write('Hello world!');
    
})


//port to listen
server.listen(5000)