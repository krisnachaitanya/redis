import { createClient } from "redis";

async function main(){
    const client = createClient();
    await client.connect()
    while(true){
        const submission = await client.brPop("submissions", 0)
        console.log(submission)
        await new Promise((res)=>setTimeout(res, 1000))
        console.log("Accepted")
    }
}

main()