const client = require("./client")

async function init(){
    // await client.lpush("messages","1")
    // await client.lpush("messages","2")
    // await client.lpush("messages","3")
    const res = await client.lrange("messages",0,-1)
    console.log(res);   
}

init()