const os=require('os')
const user=os.userInfo()
console.log(user)
console.log(`uptime:${os.uptime}`)
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}
console.log(currentOs)