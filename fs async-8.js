//Asynchronous
//readFile
//writeFile
const fs = require('fs')

fs.readFile('./content/first.txt','utf8', (err,result) =>{
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    fs.readFile('./Content/second.txt','utf8',(err,result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result;
        fs.writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`
        ,(err, result) =>{
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})

