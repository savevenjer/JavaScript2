function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    // logic
    console.log("Start!!");
    // try take awit and compare
    await promiseTimeout(2000);
    console.log("Stop!!");
}