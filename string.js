const client = require("./client")

async function init(){
    // await client.set("name:3","sricharan")
    // await client.expire("name:3",10)
    const res = await client.get("name:3")
    console.log(res);
    
}

init()