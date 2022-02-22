const {readFileSync,writeFileSync}=require('fs')
console.log('start')
const first=readFileSync('./content/text.txt','utf8');
const second=readFileSync('./content/text2.txt','utf8');
console.log(first,second)
writeFileSync(
    './content/result.txt',
    `Here is result:${first,second}`
)
console.log('done with this')
console.log('start new one');