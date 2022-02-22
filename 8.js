const {readFile,writeFile}=require('fs')
readFile('./content/text.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first=result
    readFile('./content/text1.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second=result
    })
    writeFile(
        './content/result1.txt',
        `here is the result:${first},${second}`,
        
        (err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log('done with task');
        }
    )
})
console.log('start new task')