//Date Function return Milliseconds that have elapased
//since midnight on January 1, 1970, UTC
const start = Date.now();

console.log('Starting timer...');

setTimeout(() =>{
    const millis = Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    //expected output: seconds elapsed = 2
}, 2000);