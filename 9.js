const http=require('http')
const server=http.createServer((req,res)=>{
    //console.log(req);
    if(req.url==='/'){
        //res.write(`this is res write`);
        res.end(`<h1>You r in home page</h1>
        <a href="/about">about</a><br>
        <a href="/contact">contact</a>
        `)
        //console.log('You r in home page');
    }
    if(req.url==='/about'){
        res.end('You r in about page')
        //console.log('You r in about page')
    }
    if(req.url==='/contact'){
        res.end(`<h1>You are in contact page</h1>
        <a href="/">back to home</a>
        `)
        //console.log('You are in contact page')
    }
})
server.listen(5000)