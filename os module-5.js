const os = require('os')

//We want to get info about current user with this 
//os is a built in node module and we are using some of its
//methods to get certain information
const user = os.userInfo()
console.log(user)

console.log(`The sytem Uptime is ${os.uptime()}seconds`)
//Above and below are two different methods for the same thing
const time = os.uptime()
console.log(`The system Uptime is ${time}seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)