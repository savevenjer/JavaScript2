function promiseTimeout(ms)
{
    return new Promise((resolve, reject) => {
                    setTimeout(resolve, ms);
                });
}

async function longRunningOparation() 
{
   return (42);
}

async function run() 
{
    // logic
    console.log("Start!");
    await promiseTimeout(2000);
    // Try take of await and compare
    const response = await longRunningOparation();
    console.log(response);

    console.log("Stop!");
}


console.log("Before run");
run();
console.log("After run");