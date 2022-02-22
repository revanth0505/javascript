const num=50
if(num<45){
    console.log('larger')
}
else{
    console.log('smaller')
}
//setInterval(()=>{
//    console.log('Hello')
//},1000)
const names=require('./2')
const Sayhi=require('./3')
Sayhi('revanth')
Sayhi(names.revanth)
Sayhi(names.peter)
require('./4')